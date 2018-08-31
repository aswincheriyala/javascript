// 18. Write a JavaScript function to count the occurrence of a substring in a string.
//  Go to the editor



    let count=(str,ser)=>{
        let c=0;
        let x=str.toLowerCase().split(" ");
        let y=x.length;
        for(let i=0;i<y;i++){
          if(x[i]==ser){
            c++;
          }
        }
        return c;
      }
      console.log(count("The quick brown fox jumps over the lazy dog", 'the'));