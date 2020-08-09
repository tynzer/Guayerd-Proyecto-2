let texto = "";
let ahora=new Date();
let hora= ahora.getHours();
    if(hora >= 0 && hora<6){
        texto="Buenas Madrugadas ";  
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