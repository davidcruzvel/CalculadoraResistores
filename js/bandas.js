// FUNCIONES DE CAMBIO DE COLOR DE LAS BANDAS

function cambiarColor3b(){

    // Peticion de value de los option
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;

    //Peticion de la clase 
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var multipliclass=document.getElementsByClassName("a7");    

    //Cambiando colores a banda 1    
    switch(ban1){

        case "-1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch(ban2){

        case "-1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a multiplicador    
    switch(multipli){

        case "-1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "10":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "100":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "1000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "10000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "100000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "1000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "10000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "100000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "1000000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="white"; //blanco
            }
        }break;

        case "0.1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#daa521"; //dorado
            }
        }break;

        case "0.01":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#c0c0be"; //plata
            }
        }break;

        default:{
        }
    } //fin switch
} //fin cambiarColor3b

function cambiarColor4b(){

    // Peticion de value de los option
    var ban1 = document.f4bandas.b1.value;
    var ban2 = document.f4bandas.b2.value;
    var multipli = document.f4bandas.mult.value;
    var tolerancia = document.f4bandas.tol.value;

    //Peticion de la clase 
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var multipliclass=document.getElementsByClassName("a7");
    var tolclass=document.getElementsByClassName("a12");

    //Cambiando colores a banda 1    
    switch(ban1){

        case "-1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch(ban2){

        case "-1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a multiplicador    
    switch(multipli){

        case "-1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "10":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "100":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "1000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "10000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "100000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "1000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "10000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "100000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "1000000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="white"; //blanco
            }
        }break;

        case "0.1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#daa521"; //dorado
            }
        }break;

        case "0.01":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#c0c0be"; //plata
            }
        }break;

        default:{
        }        
    } //fin switch

     //Cambiando colores a la tolerancia  
     switch(tolerancia){

        case "-1":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "± 1%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "± 2%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "± 0.5%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "± 0.25":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "± 0.1%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "± 0.05":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "± 5%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#daa521"; //dorado
            }
        }break;

        case "± 10%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#c0c0be"; //plata
            }
        }break;

        default:{
        }        
    } //fin switch
} //fin cambiarColor4b

function cambiarColor5b(){

    // Peticion de value de los option
    var ban1 = document.f5bandas.b1.value;
    var ban2 = document.f5bandas.b2.value;
    var ban3 = document.f5bandas.b3.value;
    var multipli = document.f5bandas.mult.value;
    var tolerancia = document.f5bandas.tol.value;

    //Peticion de la clase 
    var ban1class=document.getElementsByClassName("a2");
    var ban2class=document.getElementsByClassName("a5");
    var ban3class=document.getElementsByClassName("a7");
    var multipliclass=document.getElementsByClassName("a9");
    var tolclass=document.getElementsByClassName("a12");

    //Cambiando colores a banda 1    
    switch(ban1){

        case "-1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban1class.length; i++) {
                ban1class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch(ban2){

        case "-1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban2class.length; i++) {
                ban2class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch(ban3){

        case "-1":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "0":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "1":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "2":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "3":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "4":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "5":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "6":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "7":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "8":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "9":{
            for (var i=0; i<ban3class.length; i++) {
                ban3class[i].style.backgroundColor="white"; //blanco
            }
        }break;

        default:{
        }
    } //fin switch

    //Cambiando colores a multiplicador    
    switch(multipli){

        case "-1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="black"; //negro
            }
        }break;

        case "10":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "100":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "1000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#fc7c00"; //naranja
            }
        }break;

        case "10000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#ffff01"; //amarillo
            }
        }break;

        case "100000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "1000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "10000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "100000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "1000000000":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="white"; //blanco
            }
        }break;

        case "0.1":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#daa521"; //dorado
            }
        }break;

        case "0.01":{
            for (var i=0; i<multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor="#c0c0be"; //plata
            }
        }break;

        default:{
        }        
    } //fin switch

     //Cambiando colores a la tolerancia  
     switch(tolerancia){

        case "-1":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#e1c699"; //beige
            }
        }break;

        case "± 1%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#5d2d2d"; //marron
            }
        }break;

        case "± 2%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#fe0000"; //rojo
            }
        }break;

        case "± 0.5%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#008000"; //verde
            }
        }break;

        case "± 0.25":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#0002fb"; //azul
            }
        }break;

        case "± 0.1%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#81007f"; //violeta
            }
        }break;

        case "± 0.05":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#4d4b4c"; //gris
            }
        }break;

        case "± 5%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#daa521"; //dorado
            }
        }break;

        case "± 10%":{
            for (var i=0; i<tolclass.length; i++) {
                tolclass[i].style.backgroundColor="#c0c0be"; //plata
            }
        }break;

        default:{
        }        
    } //fin switch
} //fin cambiarColor5b