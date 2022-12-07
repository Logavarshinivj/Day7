
// var request= new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
// request.onload=function()
// {
//     var data= request.response
//     var result=JSON.parse(data)
//     var res1=result.filter((ele)=>ele.population<200000)
//     var res2=res1.map((ele)=>ele.name.common)
//     var res3=res2.map((ele)=>ele.population)
//     console.log(res2,res3)
// }


// var request=new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
// request.onload=function()
// {
//     var data=request.response
//     var result=JSON.parse(data)
//     var res1=result.forEach(ele=>{
//         console.log(ele.name.common,ele.flag,ele.capital)
//     })
        
   
// }

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//     var res = result.reduce((acc,cv)=>acc+cv.population,0)
//     console.log(res)
//     }
  
// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//   request.onload=function(){
//     var data=request.response
//     var result=JSON.parse(data)
//     var res1= result.filter((ele)=>ele.region=="Asia")
//     var res2= res1.map((ele)=>ele.name.common)
//     console.log(res2)
//   }

var request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
  request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res1=result.filter((ele)=>ele.currencies=="USD")
    var res2=res1.map((ele)=>ele.name.common)
    console.log(res2)
  }
