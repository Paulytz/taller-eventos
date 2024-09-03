document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("SaludoBtn"); 
    button.addEventListener("click", () => {
        alert("Hola!");
    });

    const contenedor = document.querySelector(".contenedor"); 
    contenedor.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });
});