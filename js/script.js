// js/script.js

// 1. Obtener una referencia al botón y al cuerpo de la página
const temaBtn = document.getElementById('tema-btn');
const body = document.body;

// 2. Definir la función que cambia el tema
function cambiarTema() {
    // classList.toggle añade la clase 'dark-mode' si no está, y la quita si sí está.
    body.classList.toggle('dark-mode'); 

    // Opcional: Cambiar el texto del botón
    if (body.classList.contains('dark-mode')) {
        temaBtn.textContent = 'Tema Claro';
    } else {
        temaBtn.textContent = 'Tema Oscuro';
    }
}

// 3. Asignar la función al evento de click del botón
temaBtn.addEventListener('click', cambiarTema);

console.log('Script de JavaScript cargado: Tema Oscuro habilitado.');