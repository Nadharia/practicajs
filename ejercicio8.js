const productos = [
  { id: 1, nombre: 'Mouse' },
  { id: 2, nombre: 'Teclado' },
  { id: 3, nombre: 'Monitor' }
];

const producto=productos.find((producto)=>producto.id==2);

console.log(producto)