export default (obj) => {
    const viewModal = `
<table class="table">
<thead class="thead-light">
  <tr>
    <th scope="col">Producto</th>
    <th scope="col">Descripción</th>
    <th scope="col">Cantidad</th>
    <th scope="col">P/U</th>
    <th scope="col">Precio Total</th>
  </tr>
</thead>
<tbody id="containerTabla">
</tbody>
<tfoot id="total"></tfoot>
</table>
    `;
    const divElement = document.createElement('section');
    divElement.className = "modal";
    divElement.innerHTML = viewModal;
    return divElement;
}


