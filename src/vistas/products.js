import { btnDatos } from '../controlador-rutas/tabla.js';
import { components } from '../vistas/index.js';

export default (obj) => {
  const viewProd = `
  <img  class ="card"src="${obj.url}">
  <p class="name-prod">${obj.producto}</p>
  <p class="marca">${obj.marca}</p>
  <p><span>Precio Venta </span>S/.${obj.compra}</p>
  <p><span>Precio Sugerido </span>S/.${obj.precio}</p>
  <div>
  <button id= "resta" type="button" class="btn-add">-</button>
  <span id="cant"> 1 </span>
  <button id ="suma" type="button" class="btn-add">+</button>
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
    const datosLocal = localStorage.getItem('datos');
    const objeto = datosLocal == null ? { datos: [] } : JSON.parse(datosLocal)
    const metodoFind = objeto.datos.find(ele => ele.id === obj.id);
    if (!metodoFind) {
      objeto.datos.push({ id: obj.id, cant: parseInt(cantNew.textContent), ...obj })
      btnDatos(obj);
    }else{
      metodoFind.cant++
    }
    localStorage.setItem("datos", JSON.stringify(objeto));
    // console.log(localStorage.getItem('datos'))
    
    });
    // JSON.parse(localStorage.getItem('datos')).datos.forEach(element => {
    //   console.log(element);
    // });
  
  return divElement;
}