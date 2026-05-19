let boton = document.getElementById("botón")

boton.addEventListener('click', function() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById ("resultado");

    if (nombre === "") {
        resultado.textContent = "Por favor escribe tu nombre";
        resultado.style.color = "red";
    }   else{
        resultado.textContent = " !hola, " + nombre + "!";
        resultado.style.color = "green";
    }
});