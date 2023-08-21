// CallBack function 1
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

var calc = function(fx,a,b){
    return fx(a,b);
}
var diff = function(a,b){
    console.log(a-b)
}
calc(diff,18,6)
// CallBack Function 4

