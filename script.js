// Seleccionar el contenedor donde se van a insertar las tarjetas
const contenedorProductos = document.getElementById("productos-container");

// Función para generar las tarjetas de productos
function mostrarProductos() {
    productos.forEach(producto => {
        // Crear la estructura de la tarjeta usando clases de Bootstrap
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");

        tarjeta.innerHTML = `
    <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body mt-3 p-3">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text"><strong>Precio:</strong> ${producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
            <p class="card-text"><strong>Stock:</strong> ${producto.stock.toLocaleString('es-CO')} unidades</p>
            <p class="card-text"><strong>Categoría:</strong> ${producto.categoria.join(", ")}</p>
            <div class="text-center">
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    </div>
`;


        // Agregar la tarjeta al contenedor principal
        contenedorProductos.appendChild(tarjeta);
    });
}

// Llamar la función para mostrar los productos
mostrarProductos();





