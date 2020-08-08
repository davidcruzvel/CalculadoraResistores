//CALCULO DE RESISTOR DE 3 BANDAS

function calcular3bandas(){
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;
    var valorcaja = 0;
    var tolerancia = "± 20%";
    var con = ban1.toString() + ban2.toString();

    //Validacion de 3 bandas
    if(ban1 == -1 || ban2 == -1 || multipli == -1){
        alert("ERROR: \nSeleccione correctamente los colores de las bandas");
    }
    else{
        valorcaja = parseFloat(con) * parseFloat(multipli);

        valorcaja = valorcaja + " Ω " + tolerancia;

        document.f3bandas.caja.value = valorcaja;
    }
}

function limpiar3bandas(){
    // Limpieza de opciones    
    document.f3bandas.caja.value = "";
    document.f3bandas.b1.value = -1;
    document.f3bandas.b2.value = -1;
    document.f3bandas.mult.value = -1;

    // Limpieza de las bandas
    //Peticion de la clase 
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var multipliclass=document.getElementsByClassName("a7");   

    for (var i=0; i<ban1class.length; i++) {
        ban1class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban2class.length; i++) {
        ban2class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor="#e1c699"; //beige
    }
}

//CALCULO DE RESISTOR DE 4 BANDAS

function calcular4bandas(){
    var ban1 = document.f4bandas.b1.value;
    var ban2 = document.f4bandas.b2.value;
    var multipli = document.f4bandas.mult.value;
    var tolerancia = document.f4bandas.tol.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString();
    
    //Validacion de 4 bandas
    if(ban1 == -1 || ban2 == -1 || multipli == -1 || tolerancia == -1){
        alert("ERROR: \nSeleccione correctamente los colores de las bandas.");
    }
    else{
        valorcaja = parseFloat(con) * parseFloat(multipli);

        valorcaja = valorcaja + " Ω " + tolerancia;

        document.f4bandas.caja.value = valorcaja;
    }
}

function limpiar4bandas(){   
    // Limpieza de opciones 
    document.f4bandas.caja.value = "";
    document.f4bandas.b1.value = -1;
    document.f4bandas.b2.value = -1;
    document.f4bandas.mult.value = -1;
    document.f4bandas.tol.value = -1;

    // Limpieza de las bandas
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var multipliclass=document.getElementsByClassName("a7");
    var tolclass = document.getElementsByClassName("a12");

    for (var i=0; i<ban1class.length; i++) {
        ban1class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban2class.length; i++) {
        ban2class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<tolclass.length; i++) {
        tolclass[i].style.backgroundColor="#e1c699"; //beige
    }

}


//CALCULO DE RESISTOR DE 5 BANDAS

function calcular5bandas(){    
    var ban1 = document.f5bandas.b1.value;
    var ban2 = document.f5bandas.b2.value;
    var ban3 = document.f5bandas.b3.value;
    var multipli = document.f5bandas.mult.value;
    var tolerancia = document.f5bandas.tol.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString() + ban3.toString();
    
    //Validacion de 5 bandas
    if(ban1 == -1 || ban2 == -1 || ban3 == -1 || multipli == -1 || tolerancia == -1){
        alert("ERROR: \nSeleccione correctamente los colores de las bandas.");
    }
    else{
        valorcaja = parseFloat(con) * parseFloat(multipli);

        valorcaja = valorcaja + " Ω " + tolerancia;

        document.f5bandas.caja.value = valorcaja;
    }
}

function limpiar5bandas(){
    // Limpieza de opciones
    document.f5bandas.caja.value = "";
    document.f5bandas.b1.value = -1;
    document.f5bandas.b2.value = -1;
    document.f5bandas.b3.value = -1;
    document.f5bandas.mult.value = -1;
    document.f5bandas.tol.value = -1;

    // Limpieza de las bandas
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var ban3class=document.getElementsByClassName("a7");
    var multipliclass=document.getElementsByClassName("a9");
    var tolclass = document.getElementsByClassName("a12");

    for (var i=0; i<ban1class.length; i++) {
        ban1class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban2class.length; i++) {
        ban2class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban3class.length; i++) {
        ban3class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<tolclass.length; i++) {
        tolclass[i].style.backgroundColor="#e1c699"; //beige
    }
}

function limpiarVentana(){
    // Limpieza de ventana de 3 bandas (opciones)
    document.f3bandas.caja.value = "";
    document.f3bandas.b1.value = -1;
    document.f3bandas.b2.value = -1;
    document.f3bandas.mult.value = -1;

    // Limpieza de ventana de 4 bandas (opciones)
    document.f4bandas.caja.value = "";
    document.f4bandas.b1.value = -1;
    document.f4bandas.b2.value = -1;
    document.f4bandas.mult.value = -1;
    document.f4bandas.tol.value = -1;

    // Limpieza de ventana de 5 bandas (opciones)
    document.f5bandas.caja.value = "";
    document.f5bandas.b1.value = -1;
    document.f5bandas.b2.value = -1;
    document.f5bandas.b3.value = -1;
    document.f5bandas.mult.value = -1;
    document.f5bandas.tol.value = -1;

    // Limpieza de las bandas
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var ban3class=document.getElementsByClassName("a7");
    var multipliclass=document.getElementsByClassName("a9");
    var tolclass = document.getElementsByClassName("a12");

    for (var i=0; i<ban1class.length; i++) {
        ban1class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban2class.length; i++) {
        ban2class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<ban3class.length; i++) {
        ban3class[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor="#e1c699"; //beige
    }

    for (var i=0; i<tolclass.length; i++) {
        tolclass[i].style.backgroundColor="#e1c699"; //beige
    }
}
