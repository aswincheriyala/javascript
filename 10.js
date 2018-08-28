// 10. Write a JavaScript program to compute the sum and product of an array of integers.



var arr1 = [1,2,3,4];
var sum=0;
var product=1;
for (var i=0 ; i<arr1.length ; i++){
  sum=sum+arr1[i];
  product=product*arr1[i];
}
console.log("sum is : "+sum);
console.log("product is : "+product);