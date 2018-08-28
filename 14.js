// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
// Sample numbers : -5, -2, -6, 0, -1 
// Output : 0 


var arr=[3,6,0,9,-4];
count=0;
for(var i=0;i<arr.length;i++){
  if(arr[i-1]>arr[i]){
    count=i-1;
  }
}
console.log(arr[count]);