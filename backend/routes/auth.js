const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create a user using POST method "/api/auth/createuser". Doesn't require Auth
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min: 5}),
    body('password','Password must be 5 characters').isLength({min: 5}),
], async (req, res) =>{  
  {/*
  console.log(req.body);
   const user = User(req.body);
user.save(); 
*/}
//if there are errors return bad requiest and errors
   const errors = validationResult(req);
   if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array()});
   }
   //check whether the user with this name exist or not
   try{
      let user = await User.findOne({name: req.body.name});
      if(user){
         return res.status(400).json({error: "Sorry user with this name already exist"})
      }
      user = await User.create({
         name: req.body.name,
         password: req.body.password,
      })
      res.json({"Nice": "yohoho"})
   }catch(error){
      console.error(error.message);
      res.status(500).send("Some error occur");
   }
  
})

module.exports = router