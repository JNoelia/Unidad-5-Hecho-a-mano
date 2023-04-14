const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnMuñecos = document.querySelector('.muñecos');
const btnCollares = document.querySelector('.collar');
const btnAnillos = document.querySelector('.anillo');
const btnLibretas = document.querySelector('.libretas');
// Aagregados
const btnLlaveros = document.querySelector('.llaveros');
const contenedorproductos = document.querySelector('.productos');
document.addEventListener('DOMContentLoaded', () => {
    eventos();
    productos();
});


const eventos = () => {
    menu.addEventListener('click', abrirMenu);
};

const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
};

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);

}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});


imagenes.forEach(imagen => {

    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}

const productos = () => {
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => productosArreglo = [...productosArreglo, producto]);

    const muñecos = productosArreglo.filter(muñeco => muñeco.getAttribute('data-producto') === 'muñeco');
    const collares = productosArreglo.filter(collar => collar.getAttribute('data-producto') === 'collar');
    const anillos = productosArreglo.filter(anillo => anillo.getAttribute('data-producto') === 'anillo');
    const libretas = productosArreglo.filter(libreta => libreta.getAttribute('data-producto') === 'libreta');
    const llaveros = productosArreglo.filter(llavero => llavero.getAttribute('data-producto') === 'llavero');
    mostrarproductos(muñecos, collares, anillos, libretas, llaveros, productosArreglo);

}

const mostrarproductos = (muñecos, collares, anillos, libretas, llaveros, todos) => {
    btnMuñecos.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        muñecos.forEach(muñeco => contenedorproductos.appendChild(muñeco));
    });

    btnCollares.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        collares.forEach(collar => contenedorproductos.appendChild(collar));
    });

    btnAnillos.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        anillos.forEach(anillo => contenedorproductos.appendChild(anillo));
    });
    btnLibretas.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        libretas.forEach(libreta => contenedorproductos.appendChild(libreta));
    });
    btnLlaveros.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        llaveros.forEach(llavero => contenedorproductos.appendChild(llavero));
    });
    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorproductos);
        todos.forEach(todo => contenedorproductos.appendChild(todo));
    });

}

const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

 







