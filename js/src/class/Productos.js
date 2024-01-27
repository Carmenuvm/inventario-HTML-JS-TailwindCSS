// clase Producto donde estan las propiedades de los productos a guardar
export default class Producto {
  constructor(nombre, categoria, precio, cantidad) {
    this.id = Date.now().toString();
    this.nombre = nombre.toLowerCase();
    this.categoria = categoria.toLowerCase();
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
