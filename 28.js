// 13. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor

  let repeat=(str,n=1)=>{
    let x=[];
    for(let i=0;i<n;i++){
     x=x.concat(str);
    }
    return x.join("");
  }
  
  console.log(repeat('Ha!')); 
  console.log(repeat('Ha!',2)); 
  console.log(repeat('Ha!',3));
