// Seleccionamos el elemento de control
const toggle = document.getElementById("Cambiar");

// Añadimos un escuchador de eventos para el cambio
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Si está marcado, aplicamos tema oscuro
        document.body.classList.remove("light");
        document.body.classList.add("dark")

     } else {
        // Si no, volvemos al tema claro
        document.body.classList.remove("dark");
        document.body.classList.add("light")


    }
});