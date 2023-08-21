// CallBack function 1 or function as argument
// let upperCase=function(str){
//     return str.toUpperCase();
// }
// let lowerCase=function(str){
//     return str.toLowerCase();
// }
// let transformer = function(str,fun){
//     return fun(str)
// }
// console.log(transformer("Hello",lowerCase))


// CallBack Function 2
// var talk = function(fx){
//     fx();
// }
// var sayHi = function(){
//     console.log("hi");
// }
// talk(sayHi);

// CallBack Function 3
// var calc = function(fx,a,b){
//     return fx(a,b);
// }
// var sum = function(x,y){
//     console.log(x+y);
// }
// calc(sum,5,6)

            // OR

// var calc = function(fx,a,b){
//     return fx(a,b);
// }
// var diff = function(a,b){
//     console.log(a-b)
// }
// calc(diff,18,6)


// Functionke returning function
// function makeFunc(){
//     const name ="Mercy";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// } 
// const myFunc = makeFunc();
// myFunc();

// IIFT
// (function(name){
//     console.log("this is IIFT function",name)
// })("Harry");


// setInterval && setTimeout
// function greeting(){
//     console.log("welcome to console")
// }
// setTimeout(greeting,5000 )
// setInterval(greeting,2000)