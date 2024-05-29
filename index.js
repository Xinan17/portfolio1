function sentMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    };
    const serviceID= "service_a7jadvo";
const templateID= "template_ib456dl"

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
console.log(res);
alert("your message sent succesfully");
    })
.catch(
    (err)=>console.log(err));
}

