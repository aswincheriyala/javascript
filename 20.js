// 5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor


  function abbrev_name (str) {
    var fir = str.split(' ');
    var sec = fir[1];
    sec = sec.substring(0,1);
    return fir[0] + ' ' + sec + '.';
    }
    console.log(abbrev_name("Robin Singh"));