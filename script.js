
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data=request.response
    var result=JSON.parse(data)
    for (var i of result){
    console.log(i.flag);
    }
}
// }
// {
//     var data=request.response
//     var result=JSON.parse(data)
//     for (var i of result){
//         console.log(i.name.common,i.region,i.subregion,i.population)
//     }
// }

//compare JSON o
const _ = require('lodash'); 
var obj1={
    "name":"person1",
    "age":21,
    "sex":"male"
}
var obj2={
    "age":21,
    "sex":"male",
    "name":"person1",
}
if(_.isEqual(obj1, obj2)){
    console.log("we are equal");
}
else{
    console.log("we are not equal");
}