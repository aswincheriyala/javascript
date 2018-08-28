// 7. Write a JavaScript program to find the most frequent item of an array. 
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times ) 

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9,'a'];
var count=1;
var newcount=0;
var arr=0;
for(var i=0 ; i<arr1.length ; i++){
  for(var j=i ; j<arr1.length ; j++){
    if(arr1[i] == arr1[j]){
      newcount++;
      if(newcount > count){
        count=newcount;
        arr=i;
      }
    }
  }
  newcount=0;
}
var c=count;
console.log(arr1[arr] +" ("+ c+" times)");
