// 11. Write a JavaScript function to convert a string into camel case.Go to the editor


let camelize=(str)=>{
    let arr=str.split(" ");
    let result=[];
    for(let i=0 ; i<arr.length ;  i++){
         result[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length);
        
    }
    
    return result.join("");
  }
  console.log(camelize("JavaScript Exercises")); 
  console.log(camelize("JavaScript exercises")); 
  console.log(camelize("JavaScriptExercises"));
  