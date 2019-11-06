import { btnDatos } from '../controlador-rutas/tabla.js'
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
<tfoot id="total"></tfoot>
</table>
    `;
    const divElement = document.createElement('section');
    // divElement.className = "resumen";
    divElement.innerHTML = viewResumen;
    const contenedor = divElement.querySelector('#containerTabla');
    // contenedor='';
    JSON.parse(localStorage.getItem('datos')).datos.forEach(element => {
      contenedor.appendChild(btnDatos(element));
    });
    return divElement;
}