const express = require('express');
const routing = express.Router();
const service = require('../service/user');


//To verify the credentials of user
routing.post('/login', (req, res, next) => {
  let uEmail = req.body.email;
  let uPass = req.body.password;
  
  return service.loginUser(uEmail, uPass).then(item => {
    
    res.json({ data: item });
  }).catch(err => {
    next(err);
  });
});

routing.get("/getAllCategeoryProducts/:categry",async(req,res,next)=>{
  
  let catr=req.params.categry

  try {
    let data = await service.CategoryProducts(catr)
    res.status(200)
    res.json({data});
} catch (err) {
    next(err);
}

})


routing.get("/searchedItems/:searcheditem",async(req,res,next)=>{
  
  let searcheditm=req.params.searcheditem

  try {
    let data = await service.searchedItems(searcheditm)
    res.json(data);
} catch (err) {
    next(err);
}

})


routing.get("/showProductid/:id",async(req,res,next)=>{
  
  let iditem=req.params.id

  try {
    let data = await service.showProductid(iditem)
    res.json(data);
} catch (err) {
    next(err);
}

})

routing.post('/register', async(req,res,next)=>{
  let uName=req.body.name;
  let uPass=req.body.password;
  let uEmail=req.body.emailId;
  let uPhone=req.body.mobNo;
  let uDob=req.body.dob;
  try {
    let registerForm=service.registerUser(uName,uPass,uEmail,uPhone,uDob)
    res.json({data:registerForm});
  } catch (err) {
    next(err);
  }
})

module.exports = routing