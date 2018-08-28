// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 

var a=3;
var b=-2;
var c=4;

if(a>b && a>c && b>c){
  console.log(a+","+b+","+c);
}
if(a>b && a>c && c>b){
  console.log(a+","+c+","+b);
}
if(b>a && b>c && a>c){
  console.log(b+","+a+","+c);
}
if(b>a && b>c && c>a){
  console.log(b+","+c+","+a);
}
if(c>b && c>a && b>a){
  console.log(c+","+b+","+a);
}
if(c>b && c>a && a>b){
  console.log(c+","+a+","+b);
}