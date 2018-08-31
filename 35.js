// 20. Write a JavaScript function that can pad (left, right) a string to get
//  to a determined length. Go to the editor


function formatted_string(pad, str, pos)
{
  if (typeof str == 'undefined') 
    return pad;
  if (pos == 'l')
     {
     return (pad + str).slice(-pad.length);
     }
  else 
    {
    return (str + pad).substring(0, pad.length);
    }
}
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));