1

is_string = function(input) {
    if (toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
  console.log(is_string('w3resource'));
  console.log(is_string([1, 2, 4, 0]));

2

let is_Blank=(value)=>{
    if(value.length == 0){
      return "true";
    }else 
      return "false";
  }
  
  console.log(is_Blank('')); 
  console.log(is_Blank('abc'));

  
  3

  let string_to_array = (str) =>{
    let arr=str.trim().split(" ");
    return arr;
  }
  
  console.log(string_to_array("Robin Singh"));

  4

  let truncate_string = (str,n) =>{
    if(n>0){
      let res = str.substring(0, n);
      return res;
    }
  }
  
  console.log(truncate_string("Robin Singh",4));

  
  5

  function abbrev_name (str) {
    var fir = str.split(' ');
    var sec = fir[1];
    sec = sec.substring(0,1);
    return fir[0] + ' ' + sec + '.';
    }
    console.log(abbrev_name("Robin Singh"));

    
6

let protect_email=(email)=>{
    let x=email.split("@");
    let y=x[0].length/2;
    let z=x[0].substring(0,y);
    return z +"...@"+x[1];
    
  }
  console.log(protect_email("robin_singh@example.com"));


7

function string_parameterize (str) {
    var s = str.toLowerCase();
    s = s.split(' ').join('-');
    alert(s)
    }
    console.log(string_parameterize("Robin Singh from USA."));


8

let capitalize=(str)=>{
    let x=str.charAt(0).toUpperCase()+str.slice(1);
    return x;
  }
  console.log(capitalize('js string exercises'));

  
9

let capitalize_Words=(str)=>{
    let x=str.split(" ");
      let y=[];
      for (let i=0 ; i<x.length ; i++){
        y[i]=x[i].charAt(0).toUpperCase() + x[i].slice(1, x[i.length]);
      }return y.join(" ");
    }
    console.log(capitalize_Words('js string exercises'));


10

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


11

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
  

12


function uncamelize(str, n) {
    if(typeof(n) == "undefined") {
      n = " ";
    }
    var str = str.replace(/[A-Z]/g, function (letter) 
    {
      return n + letter.toLowerCase();
    });
    return str;
  }
  console.log(uncamelize('helloWorld'));
  console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));

  13

  let repeat=(str,n=1)=>{
    let x=[];
    for(let i=0;i<n;i++){
     x=x.concat(str);
    }
    return x.join("");
  }
  
  console.log(repeat('Ha!')); 
  console.log(repeat('Ha!',2)); 
  console.log(repeat('Ha!',3));

  
  14


  let insert=(main_string, ins_string= '', pos=0)=>{
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',18));


 15

 function humanize_format(n){
    var res = '';
    if(typeof n === 'undefined'){
    return res = '';
    }
    if(n === 1){
    return 1 + 'st';
    }
    if(n === 8){
    return 8 + 'th';
    }
    var last = n.toString().slice(-1);
    if(last === '1'){
    return n + 'st';
    }
    if(last === '2'){
    return n + 'nd';
    }
    
    };
    
    
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));


    16


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

      
17

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


    18


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
      

19




20


