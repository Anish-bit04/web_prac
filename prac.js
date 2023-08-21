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

var talk = function(fx){
    fx();
}
var sayHi = function(){
    console.log("hi");
}
talk(sayHi);