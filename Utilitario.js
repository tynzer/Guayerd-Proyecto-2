//  ERNESTO BUIATTI INICIO

/*Historia de usuario: 
"Como cliente, quiero personalizar la experiencia del usuario en mi sitio para generar *engagement y potenciar su interés en mis productos y servicios de manera de maximizar la posibilidad de compra"

*(El Engagement puede definirse como el nivel de compromiso que tienen los consumidores y usuarios con una marca)*

**Se necesita:**

- Cuando el usuario ingrese al sitio (desde cualquier página) debemos preguntarle si desea ingresar su nombre y su email. Debemos guardar esa información localmente.
- Validar que no ingrese datos vacíos. En el caso del email, solo validar que lo ingresado contenga "." y "@"
- Debemos recordar su decisión para no volver a preguntarle cada vez que ingrese.*/


let aceptaIngresarDatos = ""; // este parámetro se guarda en local storage por unica vez la primera vez que entra
let nombre = "";
let email = "";

if (!localStorage.getItem ("aceptaIngresarDatos")){ // si no existe ese key es porque entra por primera vez

    if (confirm("¿Desea ingresar su nombre y su email?")){ // si acepta pide los datos y guarda la decision
        aceptaIngresarDatos = "si";
        ingresarNombre();
        ingresarEmail();
        alert ("Datos guardados correctamente");
    }else{
        aceptaIngresarDatos = "no";
    }
    localStorage.setItem ("aceptaIngresarDatos", aceptaIngresarDatos);
}

function ingresarNombre(){ // insiste hasta que se ingrese correctamente el nombre
    do{
        nombre = prompt ("Ingrese su nombre: ");
        if (validarNombre(nombre)){
            localStorage.setItem ("nombre", nombre);
        }
        else{
            alert ("No se acepta un campo vacío, vuelva a intentarlo por favor");
        }
    }while (!validarNombre(nombre))
}

function ingresarEmail(){ // insiste hasta que se ingrese correctamente el email
    do{
        email = prompt ("Ingrese su email: ");
        if (validarEmail(email)){
            localStorage.setItem ("email", email);
        }
        else{
            alert ("Ingresó un mail inválido, vuelva a intentarlo por favor");
        }
    }while (!validarEmail(email))
}

function validarNombre(parametroNombre){
    return (parametroNombre!= "" && parametroNombre!= null);
}

function validarEmail(parametroEmail) {
    return (parametroEmail != "" && parametroEmail != null && parametroEmail.indexOf(".")!==-1 && parametroEmail.indexOf("@")!==-1);
}
//ERNESTO BUIATTI FINAL



/* LUIS

Historia de Usuario: 
"Como cliente, deseo conocer si el visitante nos permite enviarle un email con novedades".
Se necesita:
- Preguntarle al visitante(Desde cualquier página) si podemos enviarle un email con novedades
- Debemos guardar la respuesta para no tener que preguntar cada vez que ingrese.
*/
let novedades=" ";
if(localStorage.getItem("email")){
	 if(!localStorage.getItem("novedades")){
        if(confirm("¿Quiere usted recibir Novedades? ")){
        novedades="si";
        ingresarEmail();
        localStorage.setItem("novedades", novedades);
        } else{
            novedades="no";
            localStorage.setItem("novedades",novedades);
        }
	}
}
