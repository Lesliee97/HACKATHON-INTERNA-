export default (obj) => {
  const viewProd = `
  <img  class ="card"src="${obj.url}">
  <p class="name-prod">${obj.producto}</p>
  <p class="marca">${obj.marca}</p>
  
  <p class="parent-btn-add"><span id="pcompra">Precio Venta </span><span id="precio-compra">S/.${obj.compra}</span></p>
  <p class="parent-btn-sugerido"><span id="psugerido">Precio Sugerido </span>S/.${obj.precio}</p>
 
  <div class="botones-agregar">
  <button id= "resta" type="button" class="btn-sum">-</button>
  <p id="cant"> 1 </p>
  <button id ="suma" type="button" class="btn-sum">+</button>
  </div>
  <button  id="agregar"type="button" class="btn-add">Agregar</button>
`;
  const divElement = document.createElement('section');
  divElement.className = "prod";
  divElement.innerHTML = viewProd;
  const cantNew = divElement.querySelector('#cant');
  const suma = divElement.querySelector('#suma');
  const resta = divElement.querySelector('#resta');
  const agregar = divElement.querySelector('#agregar');

  suma.addEventListener('click', () => {
    cantNew.innerHTML = parseInt(cantNew.textContent) + 1;
  });
  resta.addEventListener('click', () => {
    if (parseInt(cantNew.textContent) !== 1) {
      cantNew.innerHTML = parseInt(cantNew.textContent) - 1;
    } else {
      cantNew = cantNew;
    }
  });


  agregar.addEventListener('click', () => {
    const datosLocal = localStorage.getItem('datos')
    const objeto = datosLocal == null ? { datos: [] } : JSON.parse(datosLocal)
    const metodoFind = objeto.datos.find(ele => ele.id === obj.id);
    if (!metodoFind) {
      objeto.datos.push({ id: obj.id, cant: parseInt(cantNew.textContent), ...obj })
    }else{
      metodoFind.cant++
    }
    localStorage.setItem("datos", JSON.stringify(objeto))
    console.log(localStorage.getItem('datos'))
  })
  return divElement;
}