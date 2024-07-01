// Función para alternar la visibilidad de la carta al hacer clic en el sobre
function toggleCarta(button) {
    // Selecciona el elemento de la carta asociado al botón
    var carta = button.nextElementSibling;

    // Alterna la visibilidad de la carta
    if (carta.style.display === "none" || carta.style.display === "") {
        carta.style.display = "block";
        // Llama a la función para mostrar la animación de corazón
        showHeartAnimation(button);
    } else {
        carta.style.display = "none";
    }
}

// Función para mostrar la animación del corazón
function showHeartAnimation(button) {
    // Crea un elemento de imagen para la animación del corazón
    var heartAnimation = document.createElement("img");
    heartAnimation.src = "https://i.pinimg.com/originals/60/f9/ed/60f9ed1210f818439a422f00ef2b4928.gif";
    heartAnimation.classList.add("heart-animation");

    // Añade el elemento de animación del corazón al documento
    document.body.appendChild(heartAnimation);

    // Calcula la posición del botón respecto a la ventana
    var buttonRect = button.getBoundingClientRect();
    var buttonTop = buttonRect.top + window.scrollY;
    var buttonLeft = buttonRect.left + window.scrollX;

    // Establece la posición inicial de la animación del corazón
    heartAnimation.style.top = buttonTop + "px";
    heartAnimation.style.left = buttonLeft + "px";

    // Remueve el elemento de animación del corazón después de la animación
    setTimeout(function() {
        heartAnimation.remove();
    }, 5000); // 5000 milisegundos (5 segundos) de duración de la animación
}