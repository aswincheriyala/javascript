// 7. Write a JavaScript function to parameterize a string. Go to the editor

function string_parameterize (str) {
    var s = str.toLowerCase();
    s = s.split(' ').join('-');
    alert(s)
    }
    console.log(string_parameterize("Robin Singh from USA."));