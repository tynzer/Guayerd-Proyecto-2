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

 
