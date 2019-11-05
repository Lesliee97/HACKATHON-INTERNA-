import { verDataFb } from "../controlador-firebase/controlador-fb.js";
import { templates } from "../controlador-rutas/funciones.js";
import { productos } from "../controlador-firebase/controlador-fb.js";
import { components } from '../vistas/index.js';

export default () => {
  const viewCatalogue = `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light btn-danger">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li id="btnConservas" class="nav-item active">
            <a class="nav-link ">Conservas<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Aceites</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pastas</a>
          </li>
          <li  id ="detergentes" class="nav-item">
            <a class="nav-link" >Detergentes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Jabones</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="producto ...">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  </header>
  <div>
    <div>
      <input type="text" id="inputTexto" placeholder="Nombre cliente">
      <button id="btnOk">→</button>
    </div>
    <button id="btnAlmuerzo">mmm</button>
    <div id="containerCentral" class ="card"></div>
    <h2 id="cliente">Cliente : </h2>
    <div>
   `;


  const divElement = document.createElement('section');
  divElement.className = "body";
  divElement.innerHTML = viewCatalogue;
  const btnName = divElement.querySelector('#btnOk');
  const desayuno = divElement.querySelector('#btnConservas');
  const btnDetergentes = divElement.querySelector('#detergentes');
  const box = divElement.querySelector('#containerCentral');
  btnName.addEventListener('click', () => {
    const input = document.getElementById('inputTexto').value;
    const infoname = document.getElementById('cliente');
    infoname.innerHTML = `Cliente: ${input}`;

  })


  desayuno.addEventListener('click', () => {
    box.innerHTML = '';
    verDataFb('catálogo')
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          box.appendChild(templates(doc));
        });
      })
      .catch(() => console.log('error'));
  })


  btnDetergentes.addEventListener('click', () => {
    box.innerHTML = '';
    productos("detergentes", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });


  return divElement;
};
