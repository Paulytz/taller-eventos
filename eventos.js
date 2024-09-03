document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("SaludoBtn"); 
    button.addEventListener("click", (event) => {
        event.stopPropagation(); //Evita que el evento se propague al contenedor.
        alert("Hola!");
    });

    const contenedor = document.querySelector(".contenedor"); 
    contenedor.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });
});