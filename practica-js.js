function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

console.log("Reto 1 - Total calculado:", calcularTotal(50000, 3)); // 150000

//RETO 1
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { 
  if (b === 0) return "No se puede dividir por cero";
  return a / b; 
}
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log("Suma (10 + 5):", sumar(10, 5));
console.log("Resta (10 - 5):", restar(10, 5));
console.log("Multiplicación (10 * 5):", multiplicar(10, 5));
console.log("División (10 / 2):", dividir(10, 2));
console.log("Promedio (4.5, 3.8, 4.0):", calcularPromedio(4.5, 3.8, 4.0));

//RETO 2
const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado de 5:", cuadrado(5));
console.log("¿Es mayor de edad?", esMayorEdad(25));
console.log("Nombre completo:", nombreCompleto("Marilin", "Osorio"));

//RETO 3: 
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Perifericos', stock: 8 },
  { id: 5, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 2 },
  { id: 6, nombre: 'Silla Gamer', precio: 750000, categoria: 'Mobiliario', stock: 0 },
  { id: 7, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
  { id: 8, nombre: 'Disco SSD', precio: 220000, categoria: 'Almacenamiento', stock: 4 },
  { id: 9, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 1 },
  { id: 10, nombre: 'Cable HDMI', precio: 25000, categoria: 'Accesorios', stock: 20 }
];

//RETO 4:
console.log("--- RETO 4: ---");
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});


//RETO 5: 
console.log("--- RETO 5: ---");
const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log("Precios con IVA:", preciosConIva);
console.log("Nombres en mayúscula:", nombresMayuscula);
console.log("Resumen:", resumenProductos);


//RETO 6:
console.log("--- RETO 6: ---");
const precioMayor100k = productos.filter(producto => producto.precio > 100000);
const precioEntreRango = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
const productoId5 = productos.find(producto => producto.id === 5);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log("Precio > 100k:", precioMayor100k);
console.log("Precio entre 50k y 200k:", precioEntreRango);
console.log("Categoría Periféricos:", categoriaPerifericos);
console.log("Producto con id 5:", productoId5);
console.log("Resultado función buscarProducto(3):", buscarProducto(3));


//RETO 7
console.log("--- RETO 7: ---");
const hayAgotados = productos.some(producto => producto.stock === 0);
const precioMayor1Millon = productos.some(producto => producto.precio > 1000000);
const preciosValidos = productos.every(producto => producto.precio > 0);
const stockValido = productos.every(producto => producto.stock >= 0);
const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock),
  0
);

console.log("¿Existe algún producto agotado?", hayAgotados);
console.log("¿Existe algún producto > $1.000.000?", precioMayor1Millon);
console.log("¿Todos tienen precio > 0?", preciosValidos);
console.log("¿Todos tienen stock >= 0?", stockValido);
console.log("Valor total del inventario: $", valorInventario);


//RETO 8:
console.log("--- RETO 8: ---");
const productoActualizado = {
  ...productos[0],
  precio: 55000,
  stock: 8
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(`El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}`);