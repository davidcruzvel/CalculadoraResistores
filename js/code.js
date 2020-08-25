//CALCULO DE RESISTOR DE 3 BANDAS
function calcular3bandas() {
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;
    var valorcaja = 0;
    var tolerancia = "± 20%";
    var con = ban1.toString() + ban2.toString();

    //Validacion de 3 bandas
    if (ban1 == -1 || ban2 == -1 || multipli == -1) {
        alert("ERROR: \nSeleccione correctamente los colores de las bandas");
    } else {
        valorcaja = parseFloat(con) * parseFloat(multipli);

        if (multipli == 0.1) {
            //Rendondeo
            valorcaja = valorcaja.toFixed(1);
        }else if(multipli == 0.01){
            //Rendondeo
            valorcaja = valorcaja.toFixed(2);
        }

        if (valorcaja >= 0 && valorcaja <= 999) {
            valorcaja = valorcaja + " Ω " + tolerancia;
        } else {
            if (valorcaja >= 1000 && valorcaja <= 999999) {
                valorcaja = valorcaja / 1000;
                valorcaja = valorcaja + " kΩ " + tolerancia;
            } else {
                if (valorcaja >= 1000000 && valorcaja <= 999999999) {
                    valorcaja = valorcaja / 1000000;
                    valorcaja = valorcaja + " MΩ " + tolerancia;
                } else {
                    valorcaja = valorcaja / 1000000000;
                    valorcaja = valorcaja + " GΩ " + tolerancia;
                }
            }
        }
        document.f3bandas.caja.value = valorcaja;
    }
}

function limpiar3bandas() {
    // Limpieza de opciones    
    document.f3bandas.caja.value = "";
    document.f3bandas.b1.value = -1;
    document.f3bandas.b2.value = -1;
    document.f3bandas.mult.value = -1;

    // Limpieza de las bandas
    //Peticion de la clase 
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var multipliclass = document.getElementsByClassName("a7");

    for (var i = 0; i < ban1class.length; i++) {
        ban1class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban2class.length; i++) {
        ban2class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    //limpiar color de bandas
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselexmult = document.getElementsByClassName("selexmult");

    for (var i = 0; i < banselex1.length; i++) {
        banselex1[i].style.backgroundColor = "white"; //blanco
        banselex1[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex2.length; i++) {
        banselex2[i].style.backgroundColor = "white"; //blanco
        banselex2[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselexmult.length; i++) {
        banselexmult[i].style.backgroundColor = "white"; //blanco
        banselexmult[i].style.color = "black"; //Negro
    }
}

//CALCULO DE RESISTOR DE 4 BANDAS

function calcular4bandas() {
    var ban1 = document.f4bandas.b1.value;
    var ban2 = document.f4bandas.b2.value;
    var multipli = document.f4bandas.mult.value;
    var tolerancia = document.f4bandas.tol.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString();

    //Validacion de 4 bandas
    if (ban1 == -1 || ban2 == -1 || multipli == -1 || tolerancia == -1) {
        alert("ERROR: \nSeleccione correctamente los colores de las bandas.");
    }
    else {
        valorcaja = parseFloat(con) * parseFloat(multipli);

        if (multipli == 0.1) {
            //Rendondeo
            valorcaja = valorcaja.toFixed(1);
        }else if(multipli == 0.01){
            //Rendondeo
            valorcaja = valorcaja.toFixed(2);
        }

        if (valorcaja >= 0 && valorcaja <= 999) {
            valorcaja = valorcaja + " Ω " + tolerancia;
        } else {
            if (valorcaja >= 1000 && valorcaja <= 999999) {
                valorcaja = valorcaja / 1000;
                valorcaja = valorcaja + " kΩ " + tolerancia;
            } else {
                if (valorcaja >= 1000000 && valorcaja <= 999999999) {
                    valorcaja = valorcaja / 1000000;
                    valorcaja = valorcaja + " MΩ " + tolerancia;
                } else {
                    valorcaja = valorcaja / 1000000000;
                    valorcaja = valorcaja + " GΩ " + tolerancia;
                }
            }
        }

        document.f4bandas.caja.value = valorcaja;
    }
}

function limpiar4bandas() {
    // Limpieza de opciones 
    document.f4bandas.caja.value = "";
    document.f4bandas.b1.value = -1;
    document.f4bandas.b2.value = -1;
    document.f4bandas.mult.value = -1;
    document.f4bandas.tol.value = -1;

    // Limpieza de las bandas
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var multipliclass = document.getElementsByClassName("a7");
    var tolclass = document.getElementsByClassName("a12");

    for (var i = 0; i < ban1class.length; i++) {
        ban1class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban2class.length; i++) {
        ban2class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < tolclass.length; i++) {
        tolclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    //limpiar color de bandas
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselexmult = document.getElementsByClassName("selexmult");
    var banselextol = document.getElementsByClassName("selextol");

    for (var i = 0; i < banselex1.length; i++) {
        banselex1[i].style.backgroundColor = "white"; //blanco
        banselex1[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex2.length; i++) {
        banselex2[i].style.backgroundColor = "white"; //blanco
        banselex2[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselexmult.length; i++) {
        banselexmult[i].style.backgroundColor = "white"; //blanco
        banselexmult[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselextol.length; i++) {
        banselextol[i].style.backgroundColor = "white"; //blanco
        banselextol[i].style.color = "black"; //Negro
    }
}

//CALCULO DE RESISTOR DE 5 BANDAS

function calcular5bandas() {
    var ban1 = document.f5bandas.b1.value;
    var ban2 = document.f5bandas.b2.value;
    var ban3 = document.f5bandas.b3.value;
    var multipli = document.f5bandas.mult.value;
    var tolerancia = document.f5bandas.tol.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString() + ban3.toString();

    //Validacion de 5 bandas
    if (ban1 == -1 || ban2 == -1 || ban3 == -1 || multipli == -1 || tolerancia == -1) {
        alert("ERROR: \nSeleccione correctamente los colores de las bandas.");
    }
    else {
        valorcaja = parseFloat(con) * parseFloat(multipli);

        if (multipli == 0.1) {
            //Rendondeo
            valorcaja = valorcaja.toFixed(1);
        }else if(multipli == 0.01){
            //Rendondeo
            valorcaja = valorcaja.toFixed(2);
        }

        if (valorcaja >= 0 && valorcaja <= 999) {
            valorcaja = valorcaja + " Ω " + tolerancia;
        } else {
            if (valorcaja >= 1000 && valorcaja <= 999999) {
                valorcaja = valorcaja / 1000;
                valorcaja = valorcaja + " kΩ " + tolerancia;
            } else {
                if (valorcaja >= 1000000 && valorcaja <= 999999999) {
                    valorcaja = valorcaja / 1000000;
                    valorcaja = valorcaja + " MΩ " + tolerancia;
                } else {
                    valorcaja = valorcaja / 1000000000;
                    valorcaja = valorcaja + " GΩ " + tolerancia;
                }
            }
        }

        document.f5bandas.caja.value = valorcaja;
    }
}

function limpiar5bandas() {
    // Limpieza de opciones
    document.f5bandas.caja.value = "";
    document.f5bandas.b1.value = -1;
    document.f5bandas.b2.value = -1;
    document.f5bandas.b3.value = -1;
    document.f5bandas.mult.value = -1;
    document.f5bandas.tol.value = -1;

    // Limpieza de las bandas
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var ban3class = document.getElementsByClassName("a7");
    var multipliclass = document.getElementsByClassName("a9");
    var tolclass = document.getElementsByClassName("a12");

    for (var i = 0; i < ban1class.length; i++) {
        ban1class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban2class.length; i++) {
        ban2class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban3class.length; i++) {
        ban3class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < tolclass.length; i++) {
        tolclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    //limpiar color de bandas
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselex3 = document.getElementsByClassName("selexb3");
    var banselexmult = document.getElementsByClassName("selexmult");
    var banselextol = document.getElementsByClassName("selextol");

    for (var i = 0; i < banselex1.length; i++) {
        banselex1[i].style.backgroundColor = "white"; //blanco
        banselex1[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex2.length; i++) {
        banselex2[i].style.backgroundColor = "white"; //blanco
        banselex2[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex3.length; i++) {
        banselex3[i].style.backgroundColor = "white"; //blanco
        banselex3[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselexmult.length; i++) {
        banselexmult[i].style.backgroundColor = "white"; //blanco
        banselexmult[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselextol.length; i++) {
        banselextol[i].style.backgroundColor = "white"; //blanco
        banselextol[i].style.color = "black"; //Negro
    }
}

//LIMPIEZA DE BANDAS AL CAMBIAR VENTANAS

function limpiarVentana() {
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
    var ban1class = document.getElementsByClassName("a2");
    var ban2class = document.getElementsByClassName("a5");
    var ban3class = document.getElementsByClassName("a7");
    var multipliclass = document.getElementsByClassName("a9");
    var tolclass = document.getElementsByClassName("a12");

    for (var i = 0; i < ban1class.length; i++) {
        ban1class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban2class.length; i++) {
        ban2class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < ban3class.length; i++) {
        ban3class[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < multipliclass.length; i++) {
        multipliclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    for (var i = 0; i < tolclass.length; i++) {
        tolclass[i].style.backgroundColor = "#e1c699"; //beige
    }

    //limpiar color de bandas
    var banselex1 = document.getElementsByClassName("selexb1");
    var banselex2 = document.getElementsByClassName("selexb2");
    var banselex3 = document.getElementsByClassName("selexb3");
    var banselexmult = document.getElementsByClassName("selexmult");
    var banselextol = document.getElementsByClassName("selextol");

    for (var i = 0; i < banselex1.length; i++) {
        banselex1[i].style.backgroundColor = "white"; //blanco
        banselex1[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex2.length; i++) {
        banselex2[i].style.backgroundColor = "white"; //blanco
        banselex2[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselex3.length; i++) {
        banselex3[i].style.backgroundColor = "white"; //blanco
        banselex3[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselexmult.length; i++) {
        banselexmult[i].style.backgroundColor = "white"; //blanco
        banselexmult[i].style.color = "black"; //Negro
    }
    for (var i = 0; i < banselextol.length; i++) {
        banselextol[i].style.backgroundColor = "white"; //blanco
        banselextol[i].style.color = "black"; //Negro
    }
}

// CODIGO EXPERIMENTAL

// CONVERTIR VALOR A COLORES
function valorBandas(){
    var caja = document.ingresarValor.caja.value;
    var bnd1 = 0;
    var bnd2 = 0;
    var bnd3 = 0;
    var mult = 0;
    var espacio = " ";
    var contador = 0;
    var selectMult = document.ingresarValor.uni.value;
    var valorReal = 0;
    var opcion = document.ingresarValor.nbandas.value;

    valorReal = caja;

    caja = caja + espacio;
    //contando los caracteres de la caja
    contador = caja.indexOf(" "); 

    if(opcion == "3bandas" || opcion == "4bandas"){ //El resistor es de 3 o 4 bandas
        //Caso que el usuario ingrese un solo numero
        if(contador == 1){
            bnd1 = 0;
            bnd2 = valorReal;     
            
            //Evaluando las unidades escogidas
            switch(selectMult){
                case "-1":{
                    alert("ERROR: \nSeleccione correctamente las opciones de cálculo.");
                }break;
                case "o":{
                    mult = 1;
                }break;
                case "k":{
                    mult = 1000;
                }break;
                case "m":{
                    mult = 1000000;
                }break;
                case "g":{
                    mult = 1000000000;
                }break;
                default:
                break;
            }
        
        //Caso que el usuario ingrese mas de un numero
        } else if(contador > 1){

            //Caso que el usuario ingrese X.X ó 0.X
            var x = valorReal.substring(1,2);
            if (x == "."){
                var y = valorReal.substring(0, 1);
                if(y == 0){ // es Plata
                    bnd1 = valorReal.substring(2, 3);
                    if(contador >= 4){
                        bnd2 = valorReal.substring(3, 4);
                    }else if(contador < 4){
                        bnd2 = "0";
                    }
                    //Evaluando las unidades escogidas
                    switch(selectMult){
                        case "-1":{
                            alert("ERROR: \nSeleccione correctamente las opciones de cálculo.");
                        }break;
                        case "o":{
                            mult = 0.01;
                        }break;
                        case "k":{
                            mult = 10;
                        }break;
                        case "m":{
                            mult = 10000;
                        }break;
                        case "g":{
                            mult = 10000000;
                        }break;
                        default:
                        break;
                    }//Fin eval select
                }else{ // es Dorado
                    bnd1 = valorReal.substring(0, 1);
                    bnd2 = valorReal.substring(2, 3);

                    //Evaluando las unidades escogidas
                    switch(selectMult){
                        case "-1":{
                            alert("ERROR: \nSeleccione correctamente las opciones de cálculo.");
                        }break;
                        case "o":{
                            mult = 0.1;
                        }break;
                        case "k":{
                            mult = 100;
                        }break;
                        case "m":{
                            mult = 100000;
                        }break;
                        case "g":{
                            mult = 100000000;
                        }break;
                        default:
                        break;
                    }//fin eval select
                }

            //Caso que no lleve decimales
            }else{
                //Obteniendo primer numero
                bnd1 = valorReal.substring(0, 1);

                //Obteniendo segundo numero
                bnd2 = valorReal.substring(1, 2);
                
                //Evaluando las unidades
                switch(selectMult){
                    case "-1":{
                        alert("ERROR: \nSeleccione correctamente las opciones de cálculo.");
                    }break;
                    case "o":{
                        mult = 1;
                    }break;
                    case "k":{
                        mult = 1000;
                    }break;
                    case "m":{
                        mult = 1000000;
                    }break;
                    case "g":{
                        mult = 1000000000;
                    }break;
                    default:
                    break;
                }//fin switch

                //Obteniendo el valor real
                valorReal = valorReal * mult;

                console.log("vr antiguo: " + valorReal);

                //Conviertiendo a string para contarlo y cortarlo
                var valorString = valorReal.toString();

                //Obteniendo el valor real sin decimales
                var auxContador = contador;
                var contador = valorString.indexOf(".");
                if(contador == -1){
                    contador = auxContador;

                }else{
                    var auxReal = valorString.substring(0, contador);
                    valorString = auxReal;
                }
                console.log("vr: " + valorReal);
                console.log("cont: " + contador);

                //Reiniciar contador                
                var auxi = valorReal + espacio;
                contador = auxi.indexOf(" ");

                //Obteniendo los numeros restantes
                var aux = valorString.substring(2, contador);  //Cortar los ultimos numeros         
                aux = aux + espacio;
                mult = aux.indexOf(" "); //Contar los ultimos numeros
                            
                switch(mult){
                    case(0):{
                        mult = 1; //negro
                    }break;

                    case(1):{
                        mult = 10; //marron
                    }break;

                    case(2):{
                        mult = 100; //rojo
                    }break;

                    case(3):{
                        mult = 1000; //naranja
                    }break;

                    case(4):{
                        mult = 10000; //amarillo
                    }break;

                    case(5):{
                        mult = 100000; //verde
                    }break;

                    case(6):{
                        mult = 1000000; //azul
                    }break;

                    case(7):{
                        mult = 10000000; //violeta
                    }break;

                    case(8):{
                        mult = 100000000; //gris
                    }break;

                    case(9):{
                        mult = 1000000000; //blanco
                    }break;
                    
                    default:
                        alert("ERROR:El número ingresado es demasiado alto, no puede\nexistir un resistor de esa magnitud");
                        //limpiarTodo
                    break;
                }//fin switch
            }//fin caso de mas de 1 num
        }//fin evaluacion

        //Asignando valor a las bandas
        //Peticion de la clase 
        var ban1class = document.getElementsByClassName("a2");
        var ban2class = document.getElementsByClassName("a5");
        var multipliclass = document.getElementsByClassName("a7");

        //Cambiando primera banda
        //Cambiando colores a banda 1    
        switch (bnd1) {

            case "-1": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#e1c699"; //beige
                }
            } break;

            case "0": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "black"; //negro
                }
            } break;

            case "1": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#5d2d2d"; //marron
                }
            } break;

            case "2": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#fe0000"; //rojo
                }
            } break;

            case "3": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#fc7c00"; //naranja
                }
            } break;

            case "4": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#ffff01"; //amarillo
                }
            } break;

            case "5": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#008000"; //verde
                }
            } break;

            case "6": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#0002fb"; //azul
                }        
            } break;

            case "7": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#81007f"; //violeta
                }        
            } break;

            case "8": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "#707070"; //gris
                }
            } break;

            case "9": {
                for (var i = 0; i < ban1class.length; i++) {
                    ban1class[i].style.backgroundColor = "white"; //blanco
                }
            } break;

            default: {
            }
        } //fin switch

        //Cambiando colores a banda 2
        switch (bnd2) {

            case "-1": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#e1c699"; //beige
                }
            } break;

            case "0": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "black"; //negro
                }
            } break;

            case "1": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#5d2d2d"; //marron
                }
            } break;

            case "2": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#fe0000"; //rojo
                }
            } break;

            case "3": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#fc7c00"; //naranja
                }
            } break;

            case "4": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#ffff01"; //amarillo
                }
            } break;

            case "5": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#008000"; //verde
                }
            } break;

            case "6": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#0002fb"; //azul
                }
            } break;

            case "7": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#81007f"; //violeta
                }
            } break;

            case "8": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "#707070"; //gris
                }        
            } break;

            case "9": {
                for (var i = 0; i < ban2class.length; i++) {
                    ban2class[i].style.backgroundColor = "white"; //blanco
                }
            } break;

            default: {
            }
        } //fin switch

        //Cambiando color al multiplicador
        //Convirtiendo a 'mult' en String
        var multiplicador = mult.toString();
        switch (multiplicador) {
            case "-1": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#e1c699"; //beige
                }
            } break;

            case "1": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "black"; //negro
                }
            } break;

            case "10": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#5d2d2d"; //marron
                }
            } break;

            case "100": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#fe0000"; //rojo
                }
            } break;

            case "1000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#fc7c00"; //naranja
                }
            } break;

            case "10000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#ffff01"; //amarillo
                }
            } break;

            case "100000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#008000"; //verde
                }
            } break;

            case "1000000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#0002fb"; //azul
                }
            } break;

            case "10000000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#81007f"; //violeta
                }
            } break;

            case "100000000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#707070"; //gris                
                }
            } break;

            case "1000000000": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "white"; //blanco
                }
            } break;

            case "0.1": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#daa521"; //dorado
                }
            } break;

            case "0.01": {
                for (var i = 0; i < multipliclass.length; i++) {
                    multipliclass[i].style.backgroundColor = "#c0c0be"; //plata
                }
            } break;

            default: {
            }
        } //fin switch

    }else if(opcion == "5bandas"){ //El resistor es de 5 bandas
        alert("ESTA FUNCION ESTA EN DESARROLLO");
    }else{ //No se escogió ninguna opción
        alert("ERROR: Seleccione la cantidad de bandas del resistor.");
    }

}

function mostrarBandas(elemento){
    //Obteniendo el ID de la tolerancia
    var input = document.getElementById("switchBandas");
    //Obteniendo el valor del select
    var valorSelect = elemento.value;
    if(valorSelect == "3bandas"){
        //Reinicia el select
        document.ingresarValor.tol.value = -1;
        //Limpiar colores del select y de la banda
        var tolclass = document.getElementsByClassName("a12");
        var banselextol = document.getElementsByClassName("selextol");
        for (var i = 0; i < tolclass.length; i++) {
                tolclass[i].style.backgroundColor = "#e1c699"; //beige
        }
        for (var i = 0; i < banselextol.length; i++) {
            banselextol[i].style.backgroundColor = "white"; //blanco
            banselextol[i].style.color = "black"; //Negro
        }
        //Inhabilitar el select de la tolerancia
        input.disabled = true;       
    }else{
        //El select se habilita
        input.disabled = false;        
    }    
}

function cambiarColorTol(){
    //Obteniendo el valor del selector
    var tolerancia = document.ingresarValor.tol.value;
    //Peticion de la clase de la tolerancia
    var tolclass = document.getElementsByClassName("a12");
    //Cambiando color al select de tolerancia
    var banselextol = document.getElementsByClassName("selextol");

    var opcion = document.ingresarValor.nbandas.value;

    if(tolerancia == -1 && opcion == "4bandas" || opcion == "5bandas"){
        alert("ERROR: Seleccione el color de la tolerancia");
    }else{
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
    }
}

function limpiarIngresarValor(){
}