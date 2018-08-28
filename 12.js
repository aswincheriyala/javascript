// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
// Sample numbers : 3, -7, 2 
// Output : The sign is - 


var arr1=[3,-2,4];
count=0;
for(var i=0 ; i<4 ; i++){
if(arr1[i]<0){
  count++;
}
}
if(count==1 || count==3){
  console.log("The sign is -")
}
else{
    console.log("The sign is +")

}