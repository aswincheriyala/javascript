// 1. Write a JavaScript program that accept two integers and display the larger.


var num1 = window.prompt();
var num2 = window.prompt();
var str1 = num1.toString();
var str2 = num2.toString();

if (str1 > str2){
  console.log("largest is"+str1);
}
else{
  console.log("largest is "+str2);
}