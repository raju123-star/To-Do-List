//jshimt esversion:6
//module
module.exports.getDate=getDate;
function getDate(){
  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-us",options);
  return day;
}
//can use two functions i.e, getDate and getDay.
//shorter same as above but only shows day
module.exports.getDay=function (){
  var today=new Date();
  var options={
    weekday:"long",
  };
    return day=today.toLocaleDateString("en-us",options);

}
