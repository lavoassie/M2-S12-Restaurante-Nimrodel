// Display none y block de los Formularios:

$(document).ready(function () {

function forms(contacto) {
    $(contacto).css("display", "block");
    if (contacto == 'comunicar') {
        $("#reservar").css("display", "none");
    } else {
        $("#comunicar").css("display", "none");
    }
}

//Obteniendo el valor de cada input del formulario de contacto:

    $("#btnContacto").click(function () {
        var nombre = $("#nombre").val();
        var correo = $("#email").val();
        var numero = $("#number").val();
        var motivo = $("#motivo").val();

        switch (true) {
            case nombre == "":
                alert(`El campo 'Nombre' es obligatorio`);
                break;
            case correo == "":
                alert(`El campo 'Correo' es obligatorio`);
                break;
            case numero == "":
                alert(`El campo 'Teléfono' es obligatorio`);
                break;
            case motivo == "":
                alert(`Por favor, entregue más información sobre el motivo de su consulta.`);
                break;
            default:
                alert(`Muchas gracias ${nombre} hemos recibido su sugerencia: "${motivo}". Enviaremos una pronta respuesta al correo ${correo} o al número ${numero}`);
                break;
        }
        
    })
})


// $("#comunicar").validate();