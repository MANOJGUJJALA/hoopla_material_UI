const collection = require('../utilities/connection');
let user = {}

user.updateCart = async (newOne) => {
  let model = await collection.cartsCollection()
  let dat= await model.find()
  if(dat.length>0)
  {
    // console.log("here only",dat);
    let arr=dat
    arr.push(newOne)
    const da = await model.deleteMany();
    let data = await model.insertMany( arr );
    // let dat
    
    console.log("updated",data);
    return data
  }
  else{
    let arr=[]
    arr.push(newOne)
    let data = await model.insertMany( arr );
    // let data=[]
    if( data.length < 1 ) {
      return null;
    } else return data;
  }
}

user.getOrders = async () => {
  let model = await collection.cartsCollection()
  let data= await model.find()
  
  if( data.length < 1 ) {
    return null;
} else return data;
    // let dat
 
}

user.updateCartData =async(newOne)=>
{
  let model = await collection.CartproductsCollection()

  let dat= await model.find()
  if(dat.length>0)
  {
    // console.log("here only",dat);
    let arr=dat
    arr.push(newOne)
    const da = await model.deleteMany();
    let data = await model.insertMany( arr );
    // let dat
    
    console.log("updated",data);
    return data
  }
  else{
    let arr=[]
    arr.push(newOne)
    let data = await model.insertMany( arr );
    // let data=[]
    if( data.length < 1 ) {
      return null;
    } else return data;
  }

}
user.getCartData = async () => {
  let model = await collection.CartproductsCollection()
  let data= await model.find()
  
  if( data.length < 1 ) {
    return null;
} else return data;
    // let dat
 
}

user.deleteProductinCart=async(id)=>{
  let model = await collection.CartproductsCollection()
  let data= await model.deleteOne({_id:id})
  return data
}


module.exports = user