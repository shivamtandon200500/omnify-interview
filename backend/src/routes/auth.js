const express = require('express');
const { requireSignIn } = require('../common-middleware/middleware');
const router=express.Router();
const {signup,signin, signout}=require("../controllers/auth");
const { validateSignUpRequest,validateSignInRequest, isRequestValidated } = require('../validator/auth');

router.post('/signup',validateSignUpRequest,isRequestValidated,signup);
router.post('/signin',validateSignInRequest,isRequestValidated,signin);
router.post('/signout',requireSignIn,signout);
module.exports=router;