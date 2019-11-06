// import { arrProducto } from "../controlador-rutas/funciones.js";
import { guardarPedidos } from '../controlador-firebase/controlador-fb.js'

// let sumaTotal = 0
const box1 = document.querySelector('#seleccionados');
export const btnDatos = (obj) => {
  const btnPintardato = document.createElement('tr');
  btnPintardato.innerHTML +=
    `<td id="productos" >${obj.producto}</td>
          <td id="producto">s/.${obj.precio}</td>
      <td><button class="btnEliminar" id="${obj.id}">X</button></td>`;
  box1.appendChild(btnPintardato);
};

//   const subtotal = doc.precio * doc.cantidad

//   sumaTotal += subtotal



//   const btnEliminar = btnPintardato.querySelector('.btnEliminar');
//   btnEliminar.addEventListener('click', (event) => {
//     const even = event.target.id;
//     box1.removeChild(btnPintardato);
//     removeLocalStorage(arrProducto, even);
//     btnTotal(sumaTotal -= subtotal);
//   });

// // };



// export const btnTotal = () => {

//   const btnPintartotal = document.createElement('tr');
//   btnPintartotal.innerHTML =
//     ` <td>TOTAL:</td>
//        <td>s/${sumaTotal}.00</td>
//        <td></td>
//        <td><button class = "btnEnviar">Enviar</button></td>`;
//   const box2 = document.querySelector('#total');
//   box2.innerHTML = '';
//   box2.appendChild(btnPintartotal);

//   const btnAgregar = btnPintartotal.querySelector('.btnEnviar');
//   btnAgregar.addEventListener('click',()=>{
//     guardarPedidos({arrProducto});
//     const box1 = document.querySelector('#containerTabla');
//     box1.innerHTML = '';
//     const box2 = document.querySelector('#total');
//     box2.innerHTML = '';

//     localStorage.removeItem('ordenes');
//   })

// }
// const removeLocalStorage = (arrP, index) => {

//   arrP = JSON.parse(localStorage.getItem('ordenes'));
//   arrP.splice(index, 1);
//   console.log(arrP)
//   localStorage.setItem('ordenes', JSON.stringify(arrP));
// }
