const dbLayer = require('../model/user');
const db = require('../model/dbSetup')


let user = {}


user.updateCart=async(newOne)=>{
  let data=await dbLayer.updateCart(newOne)
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

user.getOrders=async()=>{
  let data=await dbLayer.getOrders()
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

user.updateCartData=async(newOne)=>{
  let data=await dbLayer.updateCartData(newOne)
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
user.getCartData=async()=>{
  let data=await dbLayer.getCartData()
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

user.deleteProductinCart=async(id)=>{
  let data=await dbLayer.deleteProductinCart(id)
  return data

}

module.exports = user