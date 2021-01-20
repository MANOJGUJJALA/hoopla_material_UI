const express = require('express');
const routing = express.Router();
const service = require('../service/user');

routing.post("/updateCart",async(req,res,next)=>{
  
    let newOne=req.body
    console.log("new data",newOne);
  
    try {
      let data = await service.updateCart(newOne)
      console.log(data);
      res.json({"message":`Successfully Ordered with orderId ${newOne._id}`});
  } catch (err) {
      next(err);
  }
  
  })


  routing.get("/getOrders",async(req,res,next)=>{
    try {
      let data = await service.getOrders()
      console.log(data);
      res.json(data);
  } catch (err) {
      next(err);
  }
  
  })


  routing.post("/addToCart",async(req,res,next)=>{
  
    let newOne=req.body
    console.log("new data",newOne);
  
    try {
      let data = await service.updateCartData(newOne)
      console.log(data);
      res.json({"message":`Successfully Added to cart with orderId ${newOne._id}`});
  } catch (err) {
      next(err);
  }
  
  })

  routing.get("/getCartData",async(req,res,next)=>{
    try {
      let data = await service.getCartData()
      console.log(data);
      res.json(data);
  } catch (err) {
      next(err);
  }
  
  })
  routing.post("/deleteProductinCart",async(req,res,next)=>{
    try {
      let id=req.body.id
      let data = await service.deleteProductinCart(id)
      console.log(data);
      if(data.deletedCount>=1)
      {

        res.json({"message":`You have successfully deleted from Cart ${id}`});
      }
  } catch (err) {
      next(err);
  }
  
  })


module.exports = routing