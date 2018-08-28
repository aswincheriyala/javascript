// 8.Write a JavaScript program which accept a string as input and swap 
// the case of each character. For example if you input 'The Quick Brown 
// Fox' the output should be 'tHE qUICK bROWN fOX'.

var str = 'The Quick Brown Fox';
const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const low = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
for(let x=0; x<str.length; x++)
{
if(up.includes(str[x]))
{
    result.push(str[x].toLowerCase());
}
else if(low.includes(str[x]))
{
    result.push(str[x].toUpperCase());
}
else 
{
    result.push(str[x]);
}
}
console.log(result.join(''));