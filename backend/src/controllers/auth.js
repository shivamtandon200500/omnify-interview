const User=require("../models/User");
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

exports.signup=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec(async(error,user)=>{
        if(user) return res.status(400).json({
            message:'User already registered'
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const hash_password = await bcrypt.hash(password,10)
        
        const _user=new User({
            firstName,
            lastName,
            email,
            hash_password
        })

        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message:error
                });
            }

            if(data){
                return res.status(201).json({
                    user:'User created successfully'
                });
            }
        })
    })
}

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({error})
        if(user){

            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'72h'})
                const {
                    _id,
                    firstName,
                    lastName,
                    email
                } = user;
                
                res.status(200).json({
                    token,
                    user:{
                        _id,
                        firstName,
                        lastName,
                        email
                    }
                })
            }
            else{
                return res.status(400).json({
                    message:'Invalid Password'
                })
            }
        }else{
            return res.status(400).json({
                message:"Something went wrong"
            })
        }

    })
}
exports.signout=(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message:"SignOut Successfully...!!!"
    })
}