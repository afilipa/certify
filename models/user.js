const mongoose=require('mongoose')

var appFormSchema =mongoose.Schema({
    email:{
        type:String
    },
    template_type:{
        type:String,
        required:true
    },
    template_name:{
        type:String,
        required:true
    },
    template_slug:{
        type:String,
        required:true
    },
    fields:[
        {
            fieldname:{
                type:String,
            
            },
            coox:{
                type:Number,
                
            },
            cooy:{
                type:Number,
                
            },
            value:{
                type:String
            }
        },{strict:false}
    ]
},{strict:false});

const Certificate=mongoose.model("Certificate",appFormSchema);
module.exports=Certificate