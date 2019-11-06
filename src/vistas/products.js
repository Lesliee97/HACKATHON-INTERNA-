export default (obj) => {
    const viewProd = `
    <div>
      <img  class ="card"src="${obj.url}">
      <p>${obj.producto}</p>
      <p>${obj.marca}</p>
      <p><span>Precio Venta </span>${obj.compra}</p>
      <p><span>Precio Sugerido </span>${obj.precio}</p>
      <button type="button">Agregar</button>
     </div> 
    `;
    const divElement = document.createElement('section');
    // divElement.className = "body";
    divElement.innerHTML = viewProd;

    return divElement;
}