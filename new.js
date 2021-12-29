function validate()
{
    var Uname=document.getElementById("Uname").nodeValue
    var password=document.getElementById("Pass").nodeValue
    if(Uname=="web" && password=="web")
{
    alert("login successfully");
}
else{
    alert('login failed');
}
}