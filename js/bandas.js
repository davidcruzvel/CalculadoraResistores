// FUNCIONES DE CAMBIO DE COLOR DE LAS BANDAS

function cambiarColor3b() {

    // Peticion de value de los option
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;

    //Peticion de la clase 
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var multipliclass = document.getElementsByClassName("a7");

    //Cambiando color a los select
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselexmult = document.getElementsByClassName("selexmult");

    //Cambiando colores a banda 1    
    switch (ban1) {

        case "-1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "black"; //negro
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fe0000"; //rojo
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#008000"; //verde
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#0002fb"; //azul
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#81007f"; //violeta
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#707070"; //gris
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch (ban2) {

        case "-1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //Blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "black"; //negro
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fe0000"; //rojo
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#008000"; //verde
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#0002fb"; //azul
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#81007f"; //violeta
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#707070"; //gris
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a multiplicador    
    switch (multipli) {

        case "-1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //Blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "black"; //negro
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#5d2d2d"; //marron
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fe0000"; //rojo
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fc7c00"; //naranja
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#ffff01"; //amarillo
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "100000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#008000"; //verde
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#0002fb"; //azul
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#81007f"; //violeta
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#707070"; //gris                
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#707070"; //gris
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#daa521"; //dorado
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#daa521"; //dorado
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.01": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#c0c0be"; //plata
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#c0c0be"; //plata
                banselexmult[i].style.color = "black"; //negro
            }
        } break;

        default: {
        }
    } //fin switch
} //fin cambiarColor3b

function cambiarColor4b() {
    // Peticion de value de los option
    var ban1 = document.f4bandas.b1.value;
    var ban2 = document.f4bandas.b2.value;
    var multipli = document.f4bandas.mult.value;
    var tolerancia = document.f4bandas.tol.value;

    //Peticion de la clase 
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var multipliclass = document.getElementsByClassName("a7");
    var tolclass = document.getElementsByClassName("a12");

    //Cambiando color a los select
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselexmult = document.getElementsByClassName("selexmult");
    var banselextol = document.getElementsByClassName("selextol");

    //Cambiando colores a banda 1    
    switch (ban1) {

        case "-1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "black"; //negro
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fe0000"; //rojo
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#008000"; //verde
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#0002fb"; //azul
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#81007f"; //violeta
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#707070"; //gris
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch (ban2) {

        case "-1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //Blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "black"; //negro
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fe0000"; //rojo
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#008000"; //verde
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#0002fb"; //azul
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#81007f"; //violeta
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#707070"; //gris
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a multiplicador    
    switch (multipli) {

        case "-1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //Blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "black"; //negro
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#5d2d2d"; //marron
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fe0000"; //rojo
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fc7c00"; //naranja
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#ffff01"; //amarillo
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "100000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#008000"; //verde
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#0002fb"; //azul
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#81007f"; //violeta
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#707070"; //gris
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#daa521"; //dorado
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#daa521"; //dorado
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.01": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#c0c0be"; //plata
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#c0c0be"; //plata
                banselexmult[i].style.color = "black"; //negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a la tolerancia  
    switch (tolerancia) {

        case "-1": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "white"; //blanco
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        case "± 1%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#5d2d2d"; //marron
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 2%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#fe0000"; //rojo
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.5%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#008000"; //verde
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.25%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#0002fb"; //azul
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.1%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#81007f"; //violeta
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.05%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#707070"; //gris
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 5%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#daa521"; //dorado
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#daa521"; //dorado
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        case "± 10%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#c0c0be"; //plata
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#c0c0be"; //plata
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        default: {
        }
    } //fin switch
} //fin cambiarColor4b

function cambiarColor5b() {
    // Peticion de value de los option
    var ban1 = document.f5bandas.b1.value;
    var ban2 = document.f5bandas.b2.value;
    var ban3 = document.f5bandas.b3.value;
    var multipli = document.f5bandas.mult.value;
    var tolerancia = document.f5bandas.tol.value;

    //Peticion de la clase 
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var ban3class = document.getElementsByClassName("a7");
    var multipliclass = document.getElementsByClassName("a9");
    var tolclass = document.getElementsByClassName("a12");

    //Cambiando color a los select
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselex3 = document.getElementsByClassName("selexb3");
    var banselexmult = document.getElementsByClassName("selexmult");
    var banselextol = document.getElementsByClassName("selextol");

    //Cambiando colores a banda 1    
    switch (ban1) {

        case "-1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "black"; //negro
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fe0000"; //rojo
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#008000"; //verde
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#0002fb"; //azul
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#81007f"; //violeta
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "#707070"; //gris
                banselex1[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban1class.length; i++) {
                ban1class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex1.length; i++) {
                banselex1[i].style.backgroundColor = "white"; //blanco
                banselex1[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a banda 2    
    switch (ban2) {

        case "-1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //Blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "black"; //negro
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fe0000"; //rojo
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#008000"; //verde
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#0002fb"; //azul
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < ban2class.length; i++) {
                banselex2[i].style.backgroundColor = "#81007f"; //violeta
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "#707070"; //gris
                banselex2[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban2class.length; i++) {
                ban2class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex2.length; i++) {
                banselex2[i].style.backgroundColor = "white"; //blanco
                banselex2[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a banda 3
    switch (ban3) {
        case "-1": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "white"; //Blanco
                banselex3[i].style.color = "black"; //Negro
            }
        } break;

        case "0": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "black";
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "black"; //negro
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "1": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#5d2d2d"; //marron
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "2": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#fe0000"; //rojo
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "3": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#fc7c00"; //naranja
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "4": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#ffff01"; //amarillo
                banselex3[i].style.color = "black"; //Negro
            }
        } break;

        case "5": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#008000"; //verde
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "6": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#0002fb"; //azul
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "7": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#81007f"; //violeta
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "8": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "#707070"; //gris
                banselex3[i].style.color = "white"; //blanco
            }
        } break;

        case "9": {
            for (var i = 0; i < ban3class.length; i++) {
                ban3class[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselex3.length; i++) {
                banselex3[i].style.backgroundColor = "white"; //blanco
                banselex3[i].style.color = "black"; //Negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a multiplicador
    switch (multipli) {
        case "-1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#e1c699"; //beige
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //Blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "black"; //negro
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "black"; //negro
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#5d2d2d"; //marron
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#5d2d2d"; //marron
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fe0000"; //rojo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fe0000"; //rojo
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#fc7c00"; //naranja
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#fc7c00"; //naranja
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#ffff01"; //amarillo
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#ffff01"; //amarillo
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "100000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#008000"; //verde
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#0002fb"; //azul
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "10000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#81007f"; //violeta
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "100000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#707070"; //gris
                banselexmult[i].style.color = "white"; //blanco
            }
        } break;

        case "1000000000": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "white"; //blanco
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "white"; //blanco
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.1": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#daa521"; //dorado
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#daa521"; //dorado
                banselexmult[i].style.color = "black"; //Negro
            }
        } break;

        case "0.01": {
            for (var i = 0; i < multipliclass.length; i++) {
                multipliclass[i].style.backgroundColor = "#c0c0be"; //plata
            }
            for (var i = 0; i < banselexmult.length; i++) {
                banselexmult[i].style.backgroundColor = "#c0c0be"; //plata
                banselexmult[i].style.color = "black"; //negro
            }
        } break;

        default: {
        }
    } //fin switch

    //Cambiando colores a la tolerancia  
    switch (tolerancia) {

        case "-1": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#e1c699"; //beige                
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "white"; //blanco
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        case "± 1%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#5d2d2d"; //marron                
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#5d2d2d"; //marron
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 2%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#fe0000"; //rojo                
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#fe0000"; //rojo
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.5%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#008000"; //verde
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#008000"; //verde
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.25%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#0002fb"; //azul
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#0002fb"; //azul
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.1%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#81007f"; //violeta
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#81007f"; //violeta
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 0.05%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#707070"; //gris
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#707070"; //gris
                banselextol[i].style.color = "white"; //blanco
            }
        } break;

        case "± 5%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#daa521"; //dorado
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#daa521"; //dorado
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        case "± 10%": {
            for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#c0c0be"; //plata
            }
            for (var i = 0; i < banselextol.length; i++) {
                banselextol[i].style.backgroundColor = "#c0c0be"; //plata
                banselextol[i].style.color = "black"; //negro
            }
        } break;

        default: {
        }
    } //fin switch
} //fin cambiarColor5b