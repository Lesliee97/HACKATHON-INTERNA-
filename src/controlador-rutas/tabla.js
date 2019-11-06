
import { guardarPedidos } from '../controlador-firebase/controlador-fb.js'
// const arrProducto = JSON.parse(localStorage.getItem('datos'));
// let sumaTotal = 0
export const btnDatos = (doc) => {
  const btnPintardato = document.createElement('tr');
  btnPintardato.innerHTML +=
    `<td id="productos" ><img src='${doc.url}' class="log"></td>
    <td id="productos" >${doc.producto}</td>
          <td id="producto">${doc.cant}</td>
          <td><p class="colour">S/.${doc.precio}</p></td> 
          <td id="productos" >S/. ${(doc.cant*doc.precio).toFixed(2)}</td>
      <td><button class="btnEliminar" id="${doc.id}">X</button></td>
    `;
  
  // box1.appendChild(btnPintardato);
  // console.log(`se agregó ${doc.id}`);
  // const subtotal = doc.precio * doc.cantidad
  
  // sumaTotal += subtotal
  const contenedor = document.querySelector('#containerTabla');
  const btnEliminar = btnPintardato.querySelector('.btnEliminar');
  btnEliminar.addEventListener('click', () => {
    // const even = event.target.id;

    // const newArray = arrProducto.filter((ele) => {
    // return doc.id !== ele.id;
    // });
    // console.log(newArray);
    // contenedor.removeChild(btnPintardato);
    // removeLocalStorage(arrProducto, even);
    // btnTotal(sumaTotal -= subtotal);
  });
  return btnPintardato;
};
export const Total = () => {
  let acum = 0;
  JSON.parse(localStorage.getItem('datos')).datos.map((p) => acum += p.precio * p.cant);
  return acum;
};

//   sumaTotal += subtotal

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
