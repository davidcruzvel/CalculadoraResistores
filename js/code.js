function calcular3bandas(){
    var ban1 = document.f3bandas.b1.value;
    var ban2 = document.f3bandas.b2.value;
    var multipli = document.f3bandas.mult.value;
    var valorcaja = 0;
    var con = ban1.toString() + ban2.toString();
    
    valorcaja = parseFloat(con) * parseFloat(multipli);

    document.f3bandas.caja.value=valorcaja;

    console.log(ban1);
    console.log(ban2);
    console.log(multipli);
    console.log(valorcaja);
    console.log(con);
}