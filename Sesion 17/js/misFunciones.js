$(document).ready(function(){
    $("a").click(function (evento) {
        
        alert("Has Pulsado el enlace. Ahora saldras de la Página")

    });
});

//Ocultar o Mostrar Caja

$("#btn1").click(function (){

    $("#cont1").toggle(1500);
},function () {
    $("#cont1").toggle(1500);
});
