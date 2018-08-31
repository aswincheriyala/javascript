// 10. Write a JavaScript function that takes a string which has lower and
//  upper case letters as a parameter and converts upper case letters to 
//  lower case, and lower case letters to upper case. Go to the editor

let swapcase=(str)=>{
    let U="QWERTYUIOPASDFGHJKLZXCVBNM";
    let L="qwertyuiopasdfghjklzxcvbnm";
    
    let x=[];
    for(let i=0 ; i<str.length ;  i++){
      for(let j=0 ; j< 26 ;j++){
      if(str[i]==U[j]){
        x[i]=L[j];
      }
      if(str[i]==L[j]){
        x[i]=U[j];
      }
    }
    }
    return x.join("");
  }
  
  console.log(swapcase('AaBbc'));
