// se almacenan en variables los elementos del DOM para asignarle eventos
const sidenavAgregar = document.querySelector("#sidenavAgregar");
const botonSidenavAgregar = document.querySelector("#botonSidenavAgregar");
const botonCancelarAgregar = document.querySelector("#botonCancelarAgregar");
const formularioAgregar = document.querySelector("#formularioAgregar");

// funcion abrirSidenavAgregar que sirve para mostrar el sidenav agregando la clase -translate-x-full
export const abrirSidenavAgregar = () =>
  sidenavAgregar.classList.remove("-translate-x-full");
// funcion abrirSidenavAgregar que sirve para cerrar el sidenav quitando la clase -translate-x-full
export const cerrarSidenavAgregar = () =>
  sidenavAgregar.classList.add("-translate-x-full");

// se le agrega un evento al boton de agregar producto para abrir el sidenav con el formulario
botonSidenavAgregar.addEventListener("click", () => {
  // se le agrega el valor "agregar" al compo oculto #formOpcion del formulario
  // para establecer que el formulario agregara un producto
  document.querySelector("#formOpcion").value = "agregar";
  document.querySelector("#tituloSidenav").innerHTML = "Agregar Producto";
  abrirSidenavAgregar();
});
// evento para cerrar el sidenav
botonCancelarAgregar.addEventListener("click", () => cerrarSidenavAgregar());

// funcion que reinicia el formulario
export const reiniciarFormulario = () => {
  formularioAgregar.reset();
};

// Mensajes de alerta

// funcion que muestra la alerta con un mensaje, contiene el parametro "mensaje" 
// que es el texto que se va a mostrar en la alerta 
export const showAlert = (mensaje) => {
  const alertContainer = document.getElementById("alert");
  const alertMensaje = document.getElementById("alert-mensaje");
  const alertButtonOk = document.getElementById("alert-ok");

  alertMensaje.textContent = mensaje;
  alertButtonOk.addEventListener("click", () => {
    alertContainer.classList.add("hidden");
  });

  alertContainer.classList.remove("hidden");
};

// funcion showConfirmar que sirve para mostrar mensajes de confirmación de acciones
// recibre los parametros "mensaje", "onConfirm" y "onCancel", el primero es el texto del mensaje,
// el segundo es una funcion que se ejecuta en caso de confirmar y el tercero una foncion que se ejecuta en caso de cancelar
export const showConfirmar = (mensaje, onConfirm, onCancel) => {
  const confirmarContainer = document.getElementById("confirmar");
  const confirmarMensaje = document.getElementById("confirmar-mensaje");
  const confirmarButtonOk = document.getElementById("confirmar-ok");
  const confirmarButtonCancelar = document.getElementById("confirmar-cancelar");

  confirmarMensaje.textContent = mensaje;
  confirmarButtonOk.addEventListener("click", onConfirm);
  confirmarButtonCancelar.addEventListener("click", onCancel);

  confirmarContainer.classList.remove("hidden");
};

// funcion que oculta el mensaje de confirmación
export const hideConfirmar = () => {
  const confirmarContainer = document.getElementById("confirmar");
  confirmarContainer.classList.add("hidden");
};