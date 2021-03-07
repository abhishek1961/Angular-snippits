const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyparser.json());
app.use(cors());

var obj={ addressLine1:"",
     addressLine2:"",
     name:"",
     email:"",
     Phone:null,
     topics:"",
     timepreference:"",
     subscribe:null
}

var nam=" ";

app.get('/name/:nam',function(req,res,next){
    
    this.nam=req.params.nam;
    res.send({"msg":this.nam});
})



app.post('/enroll',function(req,res,next){
    console.log(req.body);
    obj=req.body;
    
    res.send({"message":"data received"});
})

app.get('/display',function(req,res,next){
    res.send(obj);

})

app.listen(3000);
