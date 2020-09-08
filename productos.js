
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

if (localStorage.getItem("novedades") === "si") {
    if (confirm("Le informamos que tenemos ofertas especiales, ¿Desea ver?")) {
        window.location.replace("ofertasPersonalizadas.html");
    }
}




fetch("https://demo2420474.mockable.io/productList").then(function (responsive) {
    //lee la promesa 
    return responsive.json();
    //lee el json
}).then(function (productos) {
    //lo que tengo de comentarios es un arreglo?
    renderProductos(productos)
});

function renderProductos(productos) {
    const container = document.querySelector('#container');
    let fragmentos = "";
    productos.forEach(function (producto) {
        console.log(productos)
        let fragmento = `<div class="bici flexbox">
                        <img class="flexbox-productos" src="${producto.imgUrl}">
                        <div class="flexbox-productos">
                            <h2>${producto.title}</h2>
                            <p>${producto.description}.</p>
                              <p>Precio: <span id="precio">${producto.price}</span> ${producto.currency}<br><span id="descuento">${producto.discountPrice ? ` Precio de descuento: ${producto.discountPrice} ${producto.currency}` : "" }</span><br> Stock: ${producto.inStock}</p>
                        </div>
                    </div>`;
        fragmentos += fragmento
        console.log(fragmentos)
    });
    container.innerHTML = fragmentos;
}
/*     [---POP-UP---]
if(localStorage.getItem("novedades")==="si"){
    if(confirm("Le informamos que tenemos ofertas especiales, ¿Desea ver?")){
         window.location.replace("ofertasPersonalizadas.html");
    }
}
*/

/*
Una vez obtenido el listado del servidor, procesarlo y generar el listado en HTML con el estilo propio del sitio.

Agregar en HTML el campo price (Precio)
Agregar en HTML el campo inStock (Unidades)
Si llega el campo "discountPrice", mostrar el campo "price" tachado y poner el valor con descuento resaltado
El criterio estético queda a cargo del equipo respetando el estilo actual de la página.
*/

