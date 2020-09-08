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
                            <p>
                                <span id="descuento"><b>${producto.discountPrice ? ` Precio de descuento: ${producto.discountPrice} ${producto.currency}` : "" }</b></span><br>
                                ${producto.discountPrice ? `<s><span id="precio">Precio: ${producto.price}</span> ${producto.currency}</s>` : `<span id="precio">Precio: ${producto.price}</span> ${producto.currency}` }<br>
                                Stock: ${producto.inStock}
                            </p>
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

