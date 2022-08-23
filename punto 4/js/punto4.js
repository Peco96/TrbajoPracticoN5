function obtenerHora(){
    let fechaActual = new Date();
    // console.log(fechaActual);
    // console.log(fechaActual.getDate()); //nos da el numero de dia de la semana del 1 al 31
    // console.log(fechaActual.getDay()); //nos devuelve el dia de la semana que es jueves, el domingo es el dia 0
    // console.log(fechaActual.getFullYear());
    // console.log(fechaActual.getMonth);
    let diaSemanas = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    // console.log(diaSemanas[fechaActual.getDay()]);
    // console.log(meses[fechaActual.getMonth()]);
    
    let parrafoFecha= document.querySelector('#fecha');
    // console.log(parrafoFecha);
    parrafoFecha.innerHTML=`${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    
    let segundos=fechaActual.getSeconds();
    //ponemos para que aparezca el 0 adelante de los segundos cuando es menor a 10 segundos
    if(segundos<10){
        segundos = 0+segundos
    }
    let parrafoHora=document.querySelector('#hora');
    
    parrafoHora.innerHTML=`${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos}`;
    } 
    
    setInterval(obtenerHora,1000)