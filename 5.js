// 5. Write a JavaScript program which accept a number as input and 
// insert dashes (-) between each two even numbers. For eiample if you 
// accept 025468 the output should be 0-254-6-8.

var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var i = 1; i < str.length; i++) {
  if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
    result.push('-', str[i]);
  } else {
    result.push(str[i]);
  }
}
console.log(result.join(''));