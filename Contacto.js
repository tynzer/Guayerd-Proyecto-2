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
//let promosgrupoArr= [promoArr1,promoArr2,promoArr3,promoArr4,promoArr5];
//let nombre= "martin";
//localStorage.setItem("nombre",nombre); // este es ejemplo
function codigopromo(nombre,promo){
    //if (localStorage.getItem("nombre") != null){ // en el get item iria la key que pusieron
    alert("Estimado " + nombre +". Gracias por elegirnos! Le obsequiamos el código "+ promo+ " con su compra")
}  
 
let ramdonPromo = Math.floor(Math.random() * 5) + 1;
if (localStorage.getItem("nombre") != null){
    
   let lsNombre = localStorage.getItem("nombre")
    switch (ramdonPromo){
        case 1:
        codigopromo(lsNombre,promoArr1);
            break;
        case 2:
        codigopromo(lsNombre,promoArr2);
            break;
        case 3:
        codigopromo(lsNombre,promoArr3);
            break;
        case 4:
        codigopromo(lsNombre,promoArr4);
            break;
        case 5:
        codigopromo(lsNombre,promoArr5);
            break;
    }
}
//  ERNESTO BUIATTI INICIO
/*Historia de usuario: 
"Como cliente, quiero personalizar la experiencia del usuario en mi sitio para generar *engagement y potenciar su interés en mis productos y servicios de manera de maximizar la posibilidad de compra"
*(El Engagement puede definirse como el nivel de compromiso que tienen los consumidores y usuarios con una marca)*
**Se necesita:**
- Cuando el usuario ingrese al sitio (desde cualquier página) debemos preguntarle si desea ingresar su nombre y su email. Debemos guardar esa información localmente.
- Validar que no ingrese datos vacíos. En el caso del email, solo validar que lo ingresado contenga "." y "@"
- Debemos recordar su decisión para no volver a preguntarle cada vez que ingrese.*/


let decision = "";//este parámetro se guarda en local storage por unica vez la primera vez que entra
let nombre = "";
let email = "";

if (!localStorage.getItem ("decision")){// si esta vacio es porque entra por primera vez
    if (confirm("Desea ingresar su nombre y su email")){
        decision = "si"
        
        do{
            nombre = prompt ("Ingrese su nombre: ");
            if (nombre != ""){
                localStorage.setItem ("nombre", nombre);
                alert ("Nombre guardado correctamente");
            }
            else{
                alert ("No se acepta un campo vacío, vualva a intentarlo por favor");
            }
        }while (nombre === "")
        
        do{
            email = prompt ("Ingrese su email: ");
            if (email != "" && email.indexOf(".")!==-1 && email.indexOf("@")!==-1){
                localStorage.setItem ("email", email);
                alert ("Email guardado correctamente");
            }
            else{
                alert ("Ingreso inválido, vualva a intentarlo por favor");
            }
        }while (email === "")
    }else{
        decision = "no"
       
    }
    localStorage.setItem ("decision", decision);
}
//ERNESTO BUIATTI FINAL



