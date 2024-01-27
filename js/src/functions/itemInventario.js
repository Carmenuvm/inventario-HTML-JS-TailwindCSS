// funcion productoInvantario que contiene el html con la vista de los productos
// a mostrar en la lista de productos. recibe como parametros las propiedades del
// producto a mostrar id, nombre, categoria, precio y cantidad
export const productoInvantario = (id, nombre, categoria, precio, cantidad) =>
  `
    <div
      class="relative p-3 bg-white border-2 border-blue-600 rounded-lg mb-7 shadow shadow-black/50"
    >
      <h2 class="first-letter:uppercase text-lg text-center text-blue-600 font-semibold">
        ${nombre}
      </h2>
      <p class="text-center font-serif text-sm text-gray-500">${categoria}</p>
      <div class="mt-3 mb-3 text-center grid grid-cols-2">
        <p><strong class="text-blue-600">Precio: </strong> ${precio}$</p>
        <p><strong class="text-blue-600">Cantidad: </strong> ${cantidad}</p>
      </div>
      <div class="absolute -bottom-4 -right-3 mt-1 mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="editar transition ease-in bg-yellow-400 hover:bg-yellow-500 p-1 w-7 h-7 rounded-full shadow shadow-black active:scale-90 active:shadow-none inline-block"
          editar="${id}"
        >
          <path
            d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
            editar="${id}"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="eliminar transition ease-in bg-red-400 hover:bg-red-500 p-1 w-7 h-7 rounded-full shadow shadow-black active:scale-90 active:shadow-none inline-block"
          eliminar="${id}"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clip-rule="evenodd"
            eliminar="${id}"
          />
        </svg>
      </div>
    </div>
`;
