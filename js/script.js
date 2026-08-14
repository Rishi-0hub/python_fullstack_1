let registerForm = document.getElementById("registerForm")
if(registerForm){
    registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;
    }
    ) 
}