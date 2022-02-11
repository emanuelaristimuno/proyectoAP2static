function copiado() {

    /* Obtener el contenido de el elemento "btn-disc" */
    var copyText = document.getElementById("btn-disc").textContent;

    /* Copiar al clipboard */
    navigator.clipboard.writeText(copyText);

    /* Alert para mostrar lo que quedo copiado */
    alert("Usuario copiado al Portapapels: " + copyText);

}

function mostrarSkills() {

}