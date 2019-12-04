
function validate(){  
var name=document.f1.name.value;
var pass=document.f1.password.value;  
var passwordlength=document.f1.password.value.length;  
var status=false;  
if(name==""){  
document.getElementById("namelocation").innerHTML=  
"Please enter your name";  
status=false;
}
else{  
document.getElementById("namelocation").innerHTML=" <img src='image.jpg'/>";  
status=true;
}  
  
if(passwordlength<6){  
document.getElementById("passwordlocation").innerHTML=  
"Password must be greater than 6";  
status=false; 
}else{  
document.getElementById("passwordlocation").innerHTML=" <img src='checked.gif'/>";  
}  
  
return status;  
}  