const mongoose = require('mongoose');
const EventSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
            trim:true,
        },
        Description:{
            type:String,
            required:true,
            trim:true,
        },
        startTime:{
            type:String,
            required:true,
        },
        endTime:{
            type:String,
            required:true,
        },
        dayOfWeek:{
            type:String,
            required:true
        },
        startDate:{
            type:Date,
            required:true
        },
        resultDay:{
            type:Array
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Event",EventSchema);