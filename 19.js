// 4. Write a JavaScript function to extract a specified number of characters 
// from a string. Go to the editor


  let truncate_string = (str,n) =>{
    if(n>0){
      let res = str.substring(0, n);
      return res;
    }
  }
  
  console.log(truncate_string("Robin Singh",4));