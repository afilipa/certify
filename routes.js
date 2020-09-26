const express=require('express')
const router=express.Router()
const user=require('./certify/models/user')
const upload=require('./templateupload')

router.post('/index',(req,res)=>{
    upload(req,res,function(err) {
        if(err) {
            console.log(err)
            return res.send('Something went wrong')
        }

        else{ 
            var go={
                email:req.body.to,
                template_type:req.body.template_type,
                template_name:req.body.template_name,
                template_slug:req.body.template_slug,
                fields:req.body.fields
            }
            console.log(go);
            console.log(go.fields);
            console.log(go.fields[1].value);
            console.log(go.fields[1].coox);
            
            var newGo=new Certificate(go)
            newGo.save().then(()=>{
                console.log("Template created");
                res.send("Done");
            }).catch((err)=>{
                if(err){
                    throw err
                }
            });
            let check=req.file.filename;
            // res.send("Take this as a response");
            (async function(){
                const image=await jimp.read(`./uploads/${check}`);
                const font =await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
                let i;
                for( i=0;i<(go.fields.length)-1;i++){
        
                    image.print(font,+go.fields[i+1].coox,+go.fields[i+1].cooy,`${go.fields[i+1].value}`);
        
                }
                
                
                image.write("newcertificate2.png");
            })().catch( e => { console.error(e) });


        }
    });
});


router.get('/index',(req,res)=>{
    res.json(Certificate);
});

module.exports=router