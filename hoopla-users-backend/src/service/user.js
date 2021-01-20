const dbLayer = require('../model/user');
const db = require('../model/dbSetup')


let user = {}

//Verfying the credentials of user
user.loginUser = (uEmail, pass) => {
  
  return dbLayer.userLogin(uEmail, pass).then(response => {
    
    return response
  })
}

user.registerUser=async(uName,uPass,uEmail,uPhone,uDob)=>{
  let person=await dbLayer.checkUser(uName,uPass,uEmail,uPhone,uDob);
  return person;
}


user.CategoryProducts=async(categry)=>{
  let data=await dbLayer.CategoryProducts(categry)
  if(data)
  {
    return data
  }
  else{
    let err = new Error("Data Not Found");
    err.status = 500;
    throw err;
  }  
}

user.searchedItems=async(searcheditm)=>{
  let data=await dbLayer.searchedItems(searcheditm)
  if(data)
  {
    return data
  }
  else{
    let err = new Error("Data Not Found");
    err.status = 500;
    throw err;
  }  
}

user.showProductid=async(id)=>{
  let data=await dbLayer.showProductid(id)
  if(data)
  {
    return data
  }
  else{
    let err = new Error("Data Not Found");
    err.status = 500;
    throw err;
  }  
}

module.exports = user