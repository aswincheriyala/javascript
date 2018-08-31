// 16. Write a JavaScript function to truncates a string if it is longer than the specified
//  number of characters. Truncated strings will end with a translatable ellipsis sequence 
//  ("…") (by default) or specified characters. Go to the editor



    let text_truncate=(str,pos,char)=>{
        if(pos==undefined && char==undefined){
            return str;
        }
        else if(char==undefined){
        return str.slice(0,pos) + "...";
      }
      else{
        return str.slice(0,pos) + char;
      }
      }
      console.log(text_truncate('We are doing JS string exercises.'))
      console.log(text_truncate('We are doing JS string exercises.',19))
      console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
