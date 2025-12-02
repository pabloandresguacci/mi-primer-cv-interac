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
// js/script.js (al final del código que ya tienes)

// Función para obtener y mostrar datos de una API
async function cargarProyectos() {
    const listaProyectosDiv = document.getElementById('lista-proyectos');
    
    try {
        // Petición a la API (simulando que traemos una lista de proyectos)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const posts = await response.json(); // Convierte la respuesta a objeto JavaScript

        // Limpiar el mensaje de "Cargando..."
        listaProyectosDiv.innerHTML = ''; 

        posts.forEach(post => {
            const proyectoDiv = document.createElement('div');
            proyectoDiv.classList.add('proyecto-item');
            proyectoDiv.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body.substring(0, 50)}...</p>
                <hr>
            `;
            listaProyectosDiv.appendChild(proyectoDiv);
        });

    } catch (error) {
        listaProyectosDiv.innerHTML = '<p style="color: red;">Error al cargar los proyectos.</p>';
        console.error('Error fetching data:', error);
    }
}

// Llamar a la función para que se ejecute al cargar la página
cargarProyectos();