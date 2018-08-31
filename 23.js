// 8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor


let capitalize=(str)=>{
    let x=str.charAt(0).toUpperCase()+str.slice(1);
    return x;
  }
  console.log(capitalize('js string exercises'));