// 17. Write a JavaScript function to chop a string into chunks of a given length. Go to the editor

function string_chop(str, n){
    var strArr = [];
      var str1=str.trim().split(" ");
    
    if(n != undefined){
    for(var i = 0; i < str.length; i += n){
    strArr.push(str.substr(i, n));
    }
    return strArr;
    }
    
    return str1;
    }
    console.log(string_chop('w3resource')); 
    console.log(string_chop('w3resource',2)); 
    console.log(string_chop('w3resource',3));