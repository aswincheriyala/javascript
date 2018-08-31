// 12. Write a JavaScript function to uncamelize a string. Go to the editor


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
