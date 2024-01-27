// importacion de la clase inventario y funcion para abrir el sidenav
import Inventario from "./src/class/Inventario.js";
import { abrirSidenavAgregar } from "./src/functions/functions.js";

// se instancia la clase Inventario en una variable
const inventario = new Inventario();

// se guardan en variables los elementos del DOM para manejar eventos
const listaInventario = document.querySelector("#listaInventario");
const formularioAgregar = document.querySelector("#formularioAgregar");
const nombre = document.querySelector("#nombre");
const categoria = document.querySelector("#categoria");
const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const formOpcion = document.querySelector("#formOpcion");
const idProducto = document.querySelector("#idProducto");
const buscar = document.querySelector("#buscar");

// evento que se produce al hacer submit en el formulario
formularioAgregar.addEventListener("submit", (e) => {
  e.preventDefault;

  // validamos si lo que se pretende es agregar un producto o editarlo
  if (formOpcion.value == "agregar") {
    // llamamos el metodo agregarProducto de la clase inventario para almacenar un producto
    // se pasan como parametros los valores en el formulario
    inventario.agregarProducto(
      nombre.value,
      categoria.value,
      precio.value,
      cantidad.value
    );
  } else if (formOpcion.value == "editar") {
    // llamamos el metodo editarProducto de la clase inventario para editar un producto
    // se pasan como parametros los valores en el formulario
    inventario.editarProducto(
      idProducto.value,
      nombre.value,
      categoria.value,
      precio.value,
      cantidad.value
    );
  }
});

// evento en la lista de inventario para editar y eliminar producto haciendo delegacion de funciones
listaInventario.addEventListener("click", (e) => {
  if (e.target.hasAttribute("editar")) {

    // si el elemento del dom que disparo el evento tiene el atributo editar
    // el valor de atributo contiene el id del rpoducto a editar y se guarda en una variable
    const id = e.target.getAttribute("editar");

    // se le coloca el titulo "Editar Producto" al sidenav
    document.querySelector("#tituloSidenav").innerHTML = "Editar Producto";

    // se llama el metodo mostrarProductoPorId pasandole el id del producto a editar
    // para obtener los valores de este y agregarlos a los valores de los campos
    // del formulario
    const producto = inventario.mostrarProductoPorId(id);
    nombre.value = producto.nombre;
    categoria.value = producto.categoria;
    precio.value = producto.precio;
    cantidad.value = producto.cantidad;
    formOpcion.value = "editar";
    idProducto.value = id;

    // se abre el sidenav con la funcion abrirSidenavAgregar
    abrirSidenavAgregar();
  }
  else if (e.target.hasAttribute("eliminar")) {
    // si el elemento del dom que disparo el evento tiene el atributo eliminar
    // se guarda el valor del atributo, que es id del producto, en una variable
    // para luego llamar al metodo eliminarProducto de la clase Inventario
    // pasando el id como atributo
    const id = e.target.getAttribute("eliminar");
    inventario.eliminarProducto(id);
  }
  else return;
});

// evento del campo buscar que llama el metodo buscarProducto de la clase Inventario
buscar.addEventListener("keyup", (e)=>{
  inventario.buscarProducto(e.target.value)
})
