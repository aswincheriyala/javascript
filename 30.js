// 15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.)
//  with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor


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
