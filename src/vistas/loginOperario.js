import { verDataFb } from "../controlador-firebase/controlador-fb.js";
import { templates } from "../controlador-rutas/funciones.js";
import { productos } from "../controlador-firebase/controlador-fb.js";
import { components } from '../vistas/index.js';
import { changeRoute } from '../controlador-rutas/funciones.js';

export default () => {
  const viewCatalogue = `
  <header>
  <div class ="buscador">
  <img class="log flex1" src="../imgs/alicorp_web.jpg">
  <form class=" flex2 form-inline my-2 my-lg-0">
          <input class="form-input mr-sm-2" type="search" placeholder="¿Qué producto necesitas?">
          <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>-->
          <i class="fa fa-search btn-search" aria-hidden="true"></i>

        </form>
  </div>
    <nav id="navbar-catalogo"class="navbar navbar-expand-lg  navbar-light bg-red >
      <div class="collapse navbar-collapse" id="navbar10">
        <ul class="navbar-nav nav-fill w-100">
          <li id="btnConservas" class="nav-item " >
            <a class="nav-link text-white ">Conservas<span class="sr-only">(current)</span></a>
          </li>
          <li id="btnAceites" class="nav-item">
            <a class="nav-link text-white" >Aceites</a>
          </li>
          <li id="btnPastas" class="nav-item">
            <a class="nav-link text-white">Pastas</a>
          </li>
          <li  id ="btnDetergentes" class="nav-item">
            <a class="nav-link text-white" >Detergentes</a>
          </li>
          <li id="btnJabones" class="nav-item">
            <a class="nav-link text-white " tabindex="-1" aria-disabled="true">Jabones</a>
          </li>
          <li  id ="btnshopping" class="nav-item">
            <img id="btnCarrito" class="shopping-car" src="../imgs/shopping-cart.svg">
          </li>
        </ul>
        <div class="infoMenuDerecha">
        <img class="user" src="../imgs/man-user.svg" alt="Usuario Perfil"/>
        <p id="name"></p>
      </div>
       
      </div>
    </nav>
  </header>
  <div>

  <div class="progress">
  <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
    <span class="sr-only">0% Complete</span>
  </div>

</div>
    <div>
      <input type="text" id="inputTexto" placeholder="Nombre cliente">
      <button id="btnOk">→</button>
    </div>
    <div id="modales"></div>
    <button id="btnAlmuerzo">mmm</button>
    <div id="containerCentral" class ="cardProd"></div>
    <h2 id="cliente">Cliente : </h2>
    <div>
   `;


  const divElement = document.createElement('section');
  divElement.className = "body";
  divElement.innerHTML = viewCatalogue;
  const btnName = divElement.querySelector('#btnOk');
  /* CATEGORIAS DE PRODUCTOS */
  const btnConservas = divElement.querySelector('#btnConservas');
  const btnAceites = divElement.querySelector('#btnAceites');
  const btnPastas = divElement.querySelector('#btnPastas');
  const btnDetergentes = divElement.querySelector('#btnDetergentes');
  const btnJabones = divElement.querySelector('#btnJabones');
  const box = divElement.querySelector('#containerCentral');
  const btnCarrito = divElement.querySelector('#btnCarrito');

  btnName.addEventListener('click', () => {
    const input = document.getElementById('inputTexto').value;
    const infoname = document.getElementById('cliente');
    infoname.innerHTML = `Cliente: ${input}`;
  })

  btnCarrito.addEventListener('click', () => {
  // modal.innerHTML=components.modal().textContent;
  changeRoute('#/resumencompra');
  })

  // desayuno.addEventListener('click', () => {
  box.innerHTML = '';
  // verDataFb('catálogo')
  //   .then((snapshot) => {

  //     snapshot.docs.forEach(doc => {
  //       box.appendChild(components.products(doc.data()));

  //     });
  //   })
  //   .catch(() => console.log('error'));
  // })
  verDataFb('catálogo').then((querySnapshot) => {
    const array = [];
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
    });
    array.forEach(doc => {
      box.appendChild(components.products(doc))
    });
  })

  btnConservas.addEventListener('click', () => {
    box.innerHTML = '';
    productos("conservas", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });

  btnDetergentes.addEventListener('click', () => {
    box.innerHTML = '';
    productos("detergentes", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });
  btnAceites.addEventListener('click', () => {
    box.innerHTML = '';
    productos("aceites", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });
  btnPastas.addEventListener('click', () => {
    box.innerHTML = '';
    productos("Pasta", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });
  btnJabones.addEventListener('click', () => {
    box.innerHTML = '';
    productos("jabon", (call) => {
      call.forEach(doc => {
        box.appendChild(components.products(doc));
      });
    })
  });


  return divElement;
};
