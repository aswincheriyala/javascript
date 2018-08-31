// 3. Write a JavaScript function to split a string and convert it into 
// an array of words. Go to the editor


  let string_to_array = (str) =>{
    let arr=str.trim().split(" ");
    return arr;
  }
  
  console.log(string_to_array("Robin Singh"));