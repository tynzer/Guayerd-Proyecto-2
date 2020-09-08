/*
/////////////////
//█████████████//
//███ Martin ██//
//█████████████//
/////////////////
Historia de usuario: "Como dueño del sitio, quiero mostrarle a los visitantes ofertas especiales de forma de motivarlos a realizar una compra".

Se necesita

En página de contacto, si tenemos el nombre del usuario guardado, mostrarle en pantalla el siguiente mensaje:
"Estimado/a (Nombre). Gracias por elegirnos! Le obsequiamos el código <PROMO> con su compra".
Siendo PROMO una selección aleatoria de siguiente lista:

1) "5HOTSALE para obtener un 5% de descuento"
2) "10HOTSALE para obtener un 10% de descuento"
3) "15HOTSALE para obtener un 15% de descuento"
4) "20HOTSALE para obtener un 20% de descuento"
5) "25HOTSALE para obtener un 25% de descuento"

Nota del arquitecto
Formula para obtener números aleatorios dentro de un rango:
Math.floor(Math.random() * MAX) + MIN;
Donde MAX es el valor máximo del rango y MIN el mínimo
*/

/* 
let promoArr1 = "5HOTSALE para obtener un 5% de descuento";
let promoArr2 = "10HOTSALE para obtener un 10% de descuento";
let promoArr3 = "15HOTSALE para obtener un 15% de descuento";
let promoArr4 = "20HOTSALE para obtener un 20% de descuento";
let promoArr5 = "25HOTSALE para obtener un 25% de descuento";
let promosgrupoArr = [promoArr1, promoArr2, promoArr3, promoArr4, promoArr5];
let cantidadPromos = promosgrupoArr.length;
let randomPromo = 0;

//let randomPromo = Math.floor(Math.random() * 5) + 1;

if (localStorage.getItem("nombre") != null) {
    let lsNombre = localStorage.getItem("nombre") //obtiene el nombre
    randomSorteo(cantidadPromos)  //ejecuta la funcion del sorteo
    codigoPromo(lsNombre, promosgrupoArr[randomPromo])
}

function codigoPromo(nombre, promo) {
    //if (localStorage.getItem("nombre") != null){ // en el get item iria la key que pusieron
    alert("Estimado " + nombre + ". Gracias por elegirnos! Le obsequiamos el código " + promo + " con su compra")
}

function randomSorteo(cantidadPromos) {
    randomPromo = Math.floor(Math.random() * cantidadPromos);
    return randomPromo;
}
 */


if (localStorage.getItem("nombre") != null) {
    let lsNombre = localStorage.getItem("nombre")
    fetch("https://demo2420474.mockable.io/getCoupon").then(function (responsive) {
        return responsive.json();
    }).then(function (cupones) {
        codigoPromo(lsNombre, cupones.text, cupones.discountPercentage)
    })
};

function codigoPromo(nombre, codigo, descuento) {
    alert("Estimado " + nombre + ". Gracias por elegirnos! Le obsequiamos el código: " + codigo + " con un " + descuento + "% del total de su compra.")
};


/*Cuando el visitante llena el formulario, enviar los datos al servidor.

URL: https://demo2420474.mockable.io/submitForm (POST)

Formato:
{name:"", email:"", phone:"",subject:"", message:""}*/

const fnombre = document.querySelector("#nombre");
const femail = document.querySelector("#email");
const tema = document.querySelector("#tema");
const mensaje = document.querySelector("#mensaje");
const telefono = document.querySelector("#telefono");
let form = document.querySelector("#form");
const btnSubmit = document.querySelector("#enviar")

let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

form.addEventListener("submit", formHandler);
femail.addEventListener("input", emailHandler);
fnombre.addEventListener("input", nombreHandler);
btn.addEventListener ("click", btnHandler);


function formHandler(event){
    event.preventDefault();
    console.log("se cancelo el default");
    fetch('https://demo2420474.mockable.io/submitForm',{
    method:'POST',
    body:JSON.stringify({name:fnombre.value, email:femail.value, phone:telefono.value,subject:tema.value, message:mensaje.value}),
    headers:{'Content-Type':'application/json'}
}).then((res)=>{
    return res.json()
}).then((res)=>{
    console.log("FORMULARIO ENVIADO",res)
});
}

function emailHandler(){
    if (regex.test(femail.value)) {
      femail.classList.remove("invalid");
      femail.classList.add("valid");
      spanEmail.innerText = "*Campo obligatorio: ok";
    } else {
      femail.classList.remove("valid");
      femail.classList.add("invalid");
      //spanEmail.innerText = "*Campo obligatorio: el campo debe ser del tipo 'ejemplo@ejemplo.com'";//
    }
  }
  
  function nombreHandler(){ 
    if (fnombre.value === null || fnombre.value === "") {
      fnombre.classList.remove("valid");
      fnombre.classList.add("invalid");
      spanNombre.innerText = "*Campo obligatorio: no se aceptan campos vacios";
    } else {
      fnombre.classList.remove("invalid");
      fnombre.classList.add("valid");
      //spanNombre.innerText = "*Campo obligatorio: ok";//
    }
  }
  function btnHandler(){
    console.log("se hizo click en boton")
    if (fnombre.value === null || fnombre.value === "") {
      fnombre.setCustomValidity("No se aceptan campos vacíos!!!");
    } else {
      fnombre.setCustomValidity("");
    }
    if (regex.test(femail.value)) {
      femail.setCustomValidity("");
    } else {
      //email.setCustomValidity("El campo debe ser del tipo 'ejemplo@ejemplo.com' !!!");//
    }
  }


 
