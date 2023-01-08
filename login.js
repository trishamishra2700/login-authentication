 //check login information using javascript
 function check(){
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;
    if(u=="trishamishra" && p=="t@123")
    {
     // document.write("Login Correct");
     document.getElementById("mypara").innerHTML="Login Correct";
    }
    else
    {
       // document.write("Login InCorrect"); 
       document.getElementById("mypara").innerHTML="Login InCorrect";
    }
}