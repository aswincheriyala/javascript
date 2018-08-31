//  Write a JavaScript function to check whether a string is blank or not. Go to the editor


let is_Blank=(value)=>{
    if(value.length == 0){
      return "true";
    }else 
      return "false";
  }
  
  console.log(is_Blank('')); 
  console.log(is_Blank('abc'));