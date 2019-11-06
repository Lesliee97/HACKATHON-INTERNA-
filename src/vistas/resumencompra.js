import { btnDatos, Total } from '../controlador-rutas/tabla.js';
import { guardarPedidos } from '../controlador-firebase/controlador-fb.js';
import { currentUser } from "../controlador-firebase/controlador-fb.js";

export default () => {
    const viewResumen = `
<table class="table">
<thead class="thead-light">
  <tr>
    <th scope="col">Producto</th>
    <th scope="col">Descripción</th>
    <th scope="col">Cantidad</th>
    <th scope="col" id="precioU">P/U</th>
    <th scope="col">Precio Total</th>
    <th scope="col">Eliminar</th>
  </tr>
</thead>
<tbody id="containerTabla">
</tbody>
</table>
<p id="total">${Total()}</p>
<button id="btn-comprar" type="button" >Comprar</button>
    `;
    const divElement = document.createElement('section');
    // divElement.className = "resumen";
    divElement.innerHTML = viewResumen;
    const total = divElement.querySelector('#total');
    const contenedor = divElement.querySelector('#containerTabla');
    const comprar = divElement.querySelector('#btn-comprar');
    // contenedor='';
    JSON.parse(localStorage.getItem('datos')).datos.forEach(element => {
      contenedor.appendChild(btnDatos(element));
    });
    
    comprar.addEventListener('click', () => {
      guardarPedidos(currentUser().email, JSON.parse(localStorage.getItem('datos')).datos, Total(), new Date())
      
        contenedor.innerHTML = '';
        total.textContent ='';
      


    })
    
    return divElement;
}
