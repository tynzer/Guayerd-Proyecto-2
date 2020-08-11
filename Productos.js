
/////////////////
//█████████████//
//█ FRANCISCO █//
//█████████████//
/////////////////

/*
Historia de usuario:
"Como visitante del sitio, si deseo ver ofertas personalizadas,
 debería poder seleccionar la acción y ser dirigido a la misma".

Se Necesita:
- Cuando usuario ingresa a la pagina de listado de productos,
  informarle que tenemos ofertas personalizadas utilizando un popUp (confirm).
  Si indica que si, redirigirlo a la página correspondiente.
  Esta acción se dispara bajo las siguientes condiciones:

El usuario accedió a recibir novedades por email
Nota del arquitecto
Redirección en JS:
window.location.replace("ofertasPersonalizadas.html");
*/

if(localStorage.getItem("novedades", novedades)==="si"){
    if(confirm("Le informamos que tenemos ofertas especiales, ¿Desea ver?")){
         window.location.replace("ofertasPersonalizadas.html");
    }
}