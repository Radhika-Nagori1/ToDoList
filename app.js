const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));
var newItems=["Buy Food","Cook Food","Eat Food"];
app.get("/",function(req,res){
    /*const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date=new Date();
    var day=week[date.getDay()];
    res.render("list",{kindOfDay:day});*/
    var options = { weekday: 'long', day: 'numeric', month: 'long'};
    var today  = new Date();
    var day=today.toLocaleDateString("en-US", options);
    res.render("list",{kindOfDay:day,listItem:newItems});
});
app.post("/",function(req,res){
    var newItem=req.body.listInput;
    newItems.push(newItem);
    res.redirect("/");
})
app.listen(3000,function(req,res){
    console.log("App is listening on port 3000.");
});