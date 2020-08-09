// script bienvenida //
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
            if (nombre != "" && nombre != null){
                localStorage.setItem ("nombre", nombre);
                alert ("Nombre guardado correctamente");
            }
            else{
                alert ("No se acepta un campo vacío, vualva a intentarlo por favor");
            }
        }while (nombre === "" || nombre === null)
        
        do{
            email = prompt ("Ingrese su email: ");
            if (email != "" && email.indexOf(".")!==-1 && email.indexOf("@")!==-1 && email != null){
                localStorage.setItem ("email", email);
                alert ("Email guardado correctamente");
            }
            else{
                alert ("Ingreso inválido, vualva a intentarlo por favor");
            }
        }while (email === "" || email === null)

    }else{
        decision = "no"
       
    }
    localStorage.setItem ("decision", decision);
}


//ERNESTO BUIATTI FINAL


/*
LUIS
Historia de Usuario: 
"Como cliente, deseo conocer si el visitante nos permite enviarle un email con novedades".

Se necesita:

- Preguntarle al visitante(Desde cualquier página) si podemos enviarle un email con novedades
- Debemos guardar la respuesta para no tener que preguntar cada vez que ingrese.

luis


000

 
*/



//Codigo Bienvenida

let texto = "";
let ahora=new Date();
let hora= ahora.getHours();
    if(hora >= 0 && hora<6){
        texto="Buenos Madrugadas ";  
    }
    if(hora >= 6 && hora<12){
        texto="Buenos días ";  
    }
    if(hora>=12 && hora<19){ 
        texto="Buenas tardes ";
    }
    if (hora>=19 && hora<24){ 
        texto="Buenas noches ";
    }   //console.log(texto);
   if (localStorage.getItem("nombre")){
    alert (texto + localStorage.getItem("nombre"))
   }



/* luis
LUIS
Historia de Usuario: 
"Como cliente, deseo conocer si el visitante nos permite enviarle un email con novedades".

Se necesita:

- Preguntarle al visitante(Desde cualquier página) si podemos enviarle un email con novedades
- Debemos guardar la respuesta para no tener que preguntar cada vez que ingrese.
*/

// borrador
/*
if (Storage===undefined){
    alert("NAVEGADOR ANTIGUO, ACTUALIZAR POR FAVOR.");
}else{
    if(localStorage.getItem("KeyCorreo"!=null)){
        alert("Bienvendido Sr/a:"+localStorage.getItem("keyCorreo"));
    }else{
        let correo = prompt("Es tu primera visita por favor, ingrese su mail: ");
        localStorage.setItem("KeyCorreo", correo);
        let mostrar=localStorage.getItem("KeyCorreo");
        console.log(mostrar);
    }
}
*/