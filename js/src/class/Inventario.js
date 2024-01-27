// importacion de la clase Producto
import Producto from "./Productos.js";
// importaciones de las funciones de ../functions/functions.js
import {
  cerrarSidenavAgregar,
  hideConfirmar,
  reiniciarFormulario,
  showAlert,
  showConfirmar,
} from "../functions/functions.js";
// importacion de la funcion de la vista del producto
import { productoInvantario } from "../functions/itemInventario.js";

// desarrollo de la clase inventario que contiene los parametros y metodos
// para el funcionamiento del inventario
export default class Inventario {
  constructor() {
    this.productos = [];
    this.cargarLocalStorage();
    this.mostrarProductos();
  }

  // metodo agregar producto, tiene los parametros nombre, categoria, precio y cantidad
  // que son los datos del producto a agregar
  agregarProducto(nombre = "", categoria = "", precio = "", cantidad = "") {

    // validaciones de los parametros
    // variable compruebaNombre que sirve para validar si ya un producto se encuentra registrado
    let compruebaNombre = false;
    // validar que los campos no se encuentren vacios
    if (
      nombre.trim().length == 0 ||
      categoria.trim().length == 0 ||
      precio.trim().length == 0 ||
      cantidad.trim().length == 0
    )
      return showAlert("ERROR! Los campos no deben estar vacios!");
    
    // validar que la lantidad y el precio no tengan numeros negativos
    if (precio < 0 || cantidad < 0)
      return showAlert(
        "ERROR! La cantidad y el precio no pueden ser negativos!"
      );
    
    // se revisa si el nombre ya esta registrado, en caso de ser cierto, la variable
    // compruebaNombre pasa a true para luego enviar el mensaje de error
    this.productos.map((producto) => {
      if (producto.nombre == nombre) {
        compruebaNombre = true;
      }
    });
    if (compruebaNombre)
      return showAlert("ERROR! Nombre de producto registrado!");

    // si no hay errores instanciamos la clase Producto con los datos del producto
    // despues se agregan a la lista de productos, se actualiza el local storage
    // y se carga la lista de productos para mostrarla en la interfaz
    const producto = new Producto(nombre, categoria, precio, cantidad);
    this.productos.push(producto);
    this.actualizarLocalStorage();
    this.mostrarProductos();
    cerrarSidenavAgregar();
    reiniciarFormulario();
    return showAlert("Exito! Producto registrado!");
  }

  // metodo para eliminar un producto por el id
  eliminarProducto(id) {
    // mostramos una alerta de confirmacion para asegurarse que el usuario quiere eliminar el producto
    showConfirmar(
      "Seguro que desea eliminar este producto?",
      () => {
        // en caso de confirmar se elimina el producto y se actualizan el local storage
        // asi como tambien la lista de productos en la interfaz
        this.productos = this.productos.filter(
          (producto) => producto.id !== id
        );
        this.actualizarLocalStorage();
        this.mostrarProductos();
        hideConfirmar();
        showAlert("Producto Eliminado");
      },
      () => {
        id = null;
        hideConfirmar();
      }
    );
    return;
  }

  // metodo para editar un producto por id
  editarProducto(id, nombre = "", categoria = "", precio = "", cantidad = "") {
    const producto = this.productos.find((producto) => producto.id === id);

    // se hacen las validaciones correspondientes
    let compruebaNombre = false;
    if (precio < 0 || cantidad < 0)
      return showAlert(
        "ERROR! La cantidad y el precio no pueden ser negativos!"
      );

    this.productos.map((item) => {
      if (item.nombre == nombre && item.nombre != producto.nombre) {
        compruebaNombre = true;
      }
    });

    if (compruebaNombre)
      return showAlert("ERROR! Nombre de producto registrado!");

    // en caso de no haber errores se muestra un mensaje de confirmacion 
    showConfirmar(
      "Seguro que desea editar este producto?",
      () => {
        producto.nombre = nombre == "" ? producto.nombre : nombre.toLowerCase();
        producto.categoria =
          categoria == "" ? producto.categoria : categoria.toLowerCase();
        producto.precio = precio == "" ? producto.precio : precio;
        producto.cantidad = cantidad == "" ? producto.cantidad : cantidad;

        hideConfirmar();
        this.actualizarLocalStorage();
        this.mostrarProductos();
        cerrarSidenavAgregar();
        reiniciarFormulario();
        return showAlert("Exito! Producto Editado!");
      },
      hideConfirmar
    );
  }

  // metodo que carga la lista de productos para mostrarlos en pantalla
  // tiene como parametro listaProductos que es la lista de productos a mostrar
  // por defecto tiene el valor con los productos registrados
  mostrarProductos(listaProductos = this.productos) {
    const listaInventario = document.querySelector("#listaInventario");
    let html = "";

    if (listaProductos.length < 1) {
      return (listaInventario.innerHTML = `
        <div class="col-span-full text-center mt-4">
          <h1 class="text-2xl font-bold">No se encuentran productos registrados.</h1>
        </div>
      `);
    }

    listaProductos.map(
      (producto) =>
        (html += productoInvantario(
          producto.id,
          producto.nombre,
          producto.categoria,
          producto.precio,
          producto.cantidad
        ))
    );
    listaInventario.innerHTML = html;
    return;
  }

  // metodo que devuelve los datos de un producto por id
  mostrarProductoPorId(id) {
    return this.productos.find((producto) => producto.id === id);
  }

  // metodo para buscar productos a traves del nombre
  buscarProducto(nombre) {
    const regex = new RegExp(nombre, "i");
    this.mostrarProductos(
      this.productos.filter((producto) => regex.test(producto.nombre))
    );
  }

  // metodo para almacenar los datos en el local storage
  actualizarLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

  // metodo para cargar datos del local storage en caso de existir
  cargarLocalStorage() {
    if (localStorage.getItem("productos")) {
      this.productos = JSON.parse(localStorage.getItem("productos"));
    }
  }
}
