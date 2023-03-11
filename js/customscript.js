$(document).ready(function(){
    $("#loader").hide();
});


function SendEmail(){
    $("#loader").show();
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }; 

    const serviceID="service_8ojffbr";
    const templateID="template_di2th18";

    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            $("#loader").hide();
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Email sent successfully.");
        }
    )
    .catch((err)=>console.log(err));    
}