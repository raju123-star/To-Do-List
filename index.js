//jshimt esversion:6
const express = require("express");
let ejs = require('ejs');
const bodyparser = require("body-parser");
const app = express();
app.set('view engine','ejs');



const http = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static("public"));
app.use(bodyparser.urlencoded({
  extended: true
}));
const date=require(__dirname+"/date.js");//intialization,MODULE
console.log( Date());//shld be after intialization
var items= ["buy food","eat food"];
var workitems=[""];

app.get("/",function(req,res){

//  var currentday=today.getDay();
//prints day
/*
  var day="";
  switch(today.getDay()){
    case 0:
    day="sunday";
    break;
    case 1:
    day="monday";
    break;
    case 2:
    day="tuesday";
    break;
    case 3:
    day="wednesday";
    break;
    case 4:
    day="thursday";
    break;
    case 5:
    day="friday";
    break;
    case 6:
    day="saturday";
    break;
    default:
    console.log("error")


  }
*/
//prints whether its weekend r not
  /*
 if(today.getDay()==6 || today.getDay()==0){
   day="weekends";
  // res.send("its weekend");
 }
 else{
   day="weekdays";
 }
   */

   //res.send("its week days");
   //res.write("hii");
   //res.write("hloo");
   //res.send();
   res.render("list",{listTitle:day, newitem:items});
   //can be used day:day (confusion)
});
/*
app.post("/",function(req,res){
  var item=req.body.newitem;
  //item--items changed expect here so that itens stored in array form(i.e.same line)
  //console.log(item);
items.push(item);
res.redirect("/");

})*/

app.post("/",function(req,res){
  console.log(req.body)
  let item=req.body.newitem;
   if(req.body.list == "work"){
     workitems.push(item);
     res.redirect("/work");
   }else{
  items.push(item);
  res.redirect("/");

}
});
let day=date.getDate();//if we use .getDay it gives only day
app.get("/work",function(req,res){
   //let day =date.getDate(); we cant use here
   //it says say not defined r can use day="" outside nd work
  res.render("list",{listTitle:"Work list",newitem:workitems})
})

app.get("/about",function(req,res){
  res.render("about");
})
