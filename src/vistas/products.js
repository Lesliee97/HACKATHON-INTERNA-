export default (obj) => {
    const viewProd = `
    
      <img  class ="card"src="${obj.url}">
      <p class="name-prod">${obj.producto}</p>
      <p class="marca">${obj.marca}</p>
      <p><span>Precio Venta </span>S/.${obj.compra}</p>
      <p><span>Precio Sugerido </span>S/.${obj.precio}</p>
      <button type="button" class="btn-add">Agregar</button>
   
    `;
    const divElement = document.createElement('section');
    divElement.className = "prod";
    divElement.innerHTML = viewProd;

    return divElement;
}