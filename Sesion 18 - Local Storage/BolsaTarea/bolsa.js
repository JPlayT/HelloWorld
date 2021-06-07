function guardarDato() {
    if (document.getElementById("nombre").value.length == 0) {
        var nombre = "Vacío";
        var datos = {
            'categoria': "Vacío",
            'precio': "Vacío"
        };
        
    } else{
        var nombre = document.getElementById("nombre").value;
        var categoria = document.getElementById("categoria").value;
        var precio = document.getElementById("precio").value;

        var datos = {
            'categoria': categoria,
            'precio': precio
        };
    }

    localStorage.setItem(nombre, JSON.stringify(datos))  
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "Comestibles";
    document.getElementById("precio").value = "";
    actualizarDatos();
}

function recuperarDato() {
    var nombre = document.getElementById("nombre").value;
    var info = JSON.parse(localStorage.getItem(nombre));
    document.getElementById("categoria").value = info.categoria;
    document.getElementById("precio").value = info.precio;
}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}


function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li id="empty">Bolsa Vacía</li>'

    } else {

        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            var datos = JSON.parse(localStorage.getItem(key));
            registro += '<li>' + '<span class="nom" id="elemento">' + key + '</span>'
                + '<span class="nom">' + datos.categoria + '</span>' + '<span class="nom">' + datos.precio + '</span>' + '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}

