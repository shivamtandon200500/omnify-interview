const Event=require("../models/Event");
const formidable = require('formidable');
const moment = require("moment");
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
exports.eventList =(req,res,next)=>{
    
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }
        const {Name,Description,startTime,endTime,dayOfWeek,startDate} = fields

        const result=[];
        let newArray=[];
        const endDate = parseInt(startDate)+7776000000;
        for(let i=new Date(parseInt(startDate));i<endDate;i.setDate(i.getDate() + 1)){
            result.push(moment(i).day(dayOfWeek)
            // .format("DD.MM.YYYY"))
            .format('DD-MM-YYYY'))
        } 
        newArray=removeDuplicates(result);

        const event = new Event({
            Name,
            Description,
            startTime,
            endTime,
            dayOfWeek,
            startDate,
            resultDay:newArray
        })
        
        // res.status(201).json({newArray});

        event.save((error,event)=>{
            if (error) return res.status(400).json({error})
            
            if(event){
                return res.status(200).json({event})
            }
        })
      });
};