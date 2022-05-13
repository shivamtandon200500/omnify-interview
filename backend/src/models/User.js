const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:3,
            max:20,
            trim:true,
        },
        lastName:{
            type:String,
            required:true,
            min:3,
            max:20,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true
        },
        hash_password:{
            type:String,
            require:true,
        }
    },
    {timestamps:true}
);

UserSchema.methods={
    authenticate: async function(password){
        return await bcrypt.compare(password,this.hash_password);
    }
}

module.exports=mongoose.model("User",UserSchema);