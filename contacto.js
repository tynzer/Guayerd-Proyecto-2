/*Cuando el visitante llena el formulario, enviar los datos al servidor.

URL: https://demo2420474.mockable.io/submitForm (POST)

Formato:
{name:"", email:"", phone:"",subject:"", message:""}*/

const fnombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const tema = document.querySelector("#tema");
const mensaje = document.querySelector("#mensaje")
let form = document.querySelector("#form")

form.addEventListener("submit", formHandler);

function formHandler(event){
    event.preventDefault();
    console.log("se cancelo el default");
    /*fetch('https://demo2420474.mockable.io/submitForm',{
    method:'POST',
    body:JSON.stringify({name:fnombre.value, email:email.value, phone:"",subject:tema.value, message:mensaje.value}),
    headers:{'Content-Type':'application/json'}
}).then((res)=>{
    return res.json()
}).then((res)=>{
    console.log("FORMULARIO ENVIADO",res)
});*/
}





