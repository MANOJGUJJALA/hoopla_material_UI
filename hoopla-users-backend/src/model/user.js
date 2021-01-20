const collection = require('../utilities/connection');
let user = {}

//Verify the user credentials and modify the last logout
user.userLogin = async (uEmail, uPass) => {
  const userColl = await collection.getCollection();
  const data = await userColl.find({ "uCredentials.uEmail": uEmail });
  if (data.length === 1) {
    if (uPass == data[0]['uCredentials']['uPass']) {
      return userColl.updateOne({ "uCredentials.uEmail": uEmail },
        { $set: { "uProfile.uLastLogin": new Date().toISOString() } }).then(res => {
          if (res.nModified === 1) {
            return data;
          }
        });
    } else {
      let err = new Error("The password entered is incorrect!!");
      err.status = 401;
      throw err;
    }
  } else {
    let err_1 = new Error("You are not registered.Please register to login");
    err_1.status = 404;
    throw err_1;
  }
}

user.checkUser=async (uName,uPass,uEmail,uPhone,uDob)=>{
  uDoj=new Date();
  uLastLogin=new Date();
  const userColl = await collection.getCollection();
  const userdata1=await userColl.find({"uCredentials.uEmail":uEmail});
  const userdata2=await userColl.find({"uName":uName});
  console.log(userdata1+"----"+userdata2);
  if (userdata1.length==0 && userdata2.length==0) {
    console.log("Free to Insert");
    const data=await userColl.insertMany([{
      "userId": ("U"+(Math.random())),
    "uCredentials": {
      "uEmail": uEmail,
      "uPass": uPass,
    },
    "uProfile": {
      "uName": uName,
      "uDOB": uDob,
      "uPhone": uPhone,
      "uIsSeller": false,
      "uDateJoined": uDoj,
      "uLastLogin": uLastLogin
    }
    }]);
    // array of inserted user data is returned
    return data;
  } else if(userdata1.length==1 || userdata2.length==1){
    //empty array if user found
    return [];
  }
}

user.CategoryProducts = async (categry) => {
  let model = await collection.productsCollection()
  // let datar = await model.find(  );
  // console.log("jauih",datar);
  let data = await model.find( { "category": categry } );
  if( data.length < 1 ) {c
      return null;
  } else return data;
}

user.searchedItems = async (searcheditm) => {
  let model = await collection.productsCollection()
  let data = await model.find( { "name": {"$regex":`${searcheditm}`,$options:"i"} } ); 
  if( data.length < 1 ) {
      return null;
  } else return data;
}

user.showProductid = async (id) => {
  let model = await collection.productsCollection()
  let data = await model.find( { "_id":id } );
  if( data.length < 1 ) {
      return null;
  } else return data;
}


module.exports = user