//CALCULO DE RESISTOR DE 3 BANDAS

function calcular3bandas(){
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString();

    //Validacion de 3 bandas
    if(ban1 == -1 || ban2 == -1 || multipli == -1){
        alert("*Uno de los campos no ha sido seleccionado*");
    }
    else{
        valorcaja = parseFloat(con) * parseFloat(multipli);

        valorcaja = valorcaja + " Ω";

        document.f3bandas.caja.value = valorcaja;
    }
}

function limpiar3bandas(){    
    document.f3bandas.caja.value = "";
    document.f3bandas.b1.value = -1;
    document.f3bandas.b2.value = -1;
    document.f3bandas.mult.value = -1;
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
        alert("*Uno de los campos no ha sido seleccionado*");
    }
    else{
        valorcaja = parseFloat(con) * parseFloat(multipli);

        valorcaja = valorcaja + " Ω " + tolerancia;

        document.f4bandas.caja.value = valorcaja;
    }
}

function limpiar4bandas(){    
    document.f4bandas.caja.value = "";
    document.f4bandas.b1.value = -1;
    document.f4bandas.b2.value = -1;
    document.f4bandas.mult.value = -1;
    document.f4bandas.tol.value = -1;
}
