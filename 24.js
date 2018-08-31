// 9. Write a JavaScript function to capitalize the first letter of each 
// word in a string. Go to the editor


let capitalize_Words=(str)=>{
    let x=str.split(" ");
      let y=[];
      for (let i=0 ; i<x.length ; i++){
        y[i]=x[i].charAt(0).toUpperCase() + x[i].slice(1, x[i.length]);
      }return y.join(" ");
    }
    console.log(capitalize_Words('js string exercises'));
