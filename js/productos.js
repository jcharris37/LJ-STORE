const productosZapatos = [
  {
    imagen: 'img/zapato1.png',
    nombre: 'Zapato negro clásico',
    tallas: [37, 38, 39, 40],
    precio: 79000
  },
  {
    imagen: 'img/zapato2.png',
    nombre: 'Tenis blanco urbano',
    tallas: [36, 37, 38, 39, 40],
    precio: 95000
  }
];

function mostrarZapatos() {
  const contenedor = document.getElementById('contenedor-productos');
  productosZapatos.forEach(producto => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Tallas: ${producto.tallas.join(', ')}</p>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
    `;
    contenedor.appendChild(div);
  });
}

