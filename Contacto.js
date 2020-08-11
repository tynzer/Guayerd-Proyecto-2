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


// Poner el mobre del get localsotre

let promoArr1= "5HOTSALE para obtener un 5% de descuento";  
let promoArr2= "10HOTSALE para obtener un 10% de descuento";   
let promoArr3= "15HOTSALE para obtener un 15% de descuento";  
let promoArr4= "20HOTSALE para obtener un 20% de descuento";   
let promoArr5= "25HOTSALE para obtener un 25% de descuento";
let promosgrupoArr= [promoArr1,promoArr2,promoArr3,promoArr4,promoArr5];
let cantidadPromos = promosgrupoArr.length;
let randomPromo= 0;

//let randomPromo = Math.floor(Math.random() * 5) + 1;
 
function codigopromo(nombre,promo){
    //if (localStorage.getItem("nombre") != null){ // en el get item iria la key que pusieron
    alert("Estimado " + nombre +". Gracias por elegirnos! Le obsequiamos el código "+ promo+ " con su compra")
}  
 
function randomSorteo(cantidadPromos){
    randomPromo = Math.floor(Math.random() * cantidadPromos);
    return randomPromo;
}

if (localStorage.getItem("nombre") != null){
   let lsNombre = localStorage.getItem("nombre") //obtiene el nombre
   randomSorteo(cantidadPromos)  //ejecuta la funcion del sorteo
   codigopromo(lsNombre,promosgrupoArr[randomPromo])
}