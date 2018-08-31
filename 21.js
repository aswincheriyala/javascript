// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor

let protect_email=(email)=>{
    let x=email.split("@");
    let y=x[0].length/2;
    let z=x[0].substring(0,y);
    return z +"...@"+x[1];
    
  }
  console.log(protect_email("robin_singh@example.com"));