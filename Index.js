// Marcos //
/*
Historia de usuario:
"Como cliente, quiero que el sitio se personalice mostrando el nombre del usuario en secciones clave para maximizar la posibilidad compra/contacto"

Se necesita

En la página principal, si tenemos el nombre guardado, debemos saludarlo de la siguiente forma: "[Momento del día], Nombre".
Siendo [Momento del día] reemplazado según la siguiente tabla:
| Hora | Saludo
|------------|----------------------------------
| 00 - 06 | "Buenas madrugadas"
| 06 - 12 | "Buen día"
| 12 - 19 | "Buenas tardes"
| 19 - 00 | "Buenas noches"

Nota del Arquitecto

Obtener hora del día en JS:
const fecha = new Date();
const hora = fecha.getHours();
console.log(hora);
*/


let ahora=new Date();
let hora= ahora.getHours();
   
   if (localStorage.getItem("nombre")){
    alert (getMessage(hora) + localStorage.getItem("nombre"))
   }  

 function getMessage(hora){
    if(hora >= 0 && hora<6){
        return "Buenos Madrugadas ";  
    }
    if(hora >= 6 && hora<12){
        return "Buenos días ";  
    }
    if(hora>=12 && hora<19){ 
        return "Buenas tardes ";
    }
        return "Buenas noches ";
    }  
