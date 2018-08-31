// 14. Write a JavaScript function to insert a string within a string at a particular
//  position (default is 1).Go to the editor



  let insert=(main_string, ins_string= '', pos=0)=>{
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',18));

