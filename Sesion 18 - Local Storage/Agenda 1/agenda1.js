function guardarDatos() {
    localStorage.nombre=document.getElementById("nombre").value;
    localStorage.cel=document.getElementById("cel").value;

}

function consultarDatos() {
    if (localStorage.nombre!=undefined && localStorage.cel!=undefined) {
        document.getElementById("datos").innerHTML="Nombre: "+localStorage.nombre+" <br> Celular: "+localStorage.cel;
    }else{
        document.getElementById("datos").innerHTML="No hay Dayos Almacenados";
    };

}