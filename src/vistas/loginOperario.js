import { verDataFb } from "../controlador-firebase/controlador-fb.js";
// import { templates } from "../controlador-rutas/funciones.js";
import { productos, currentUser } from "../controlador-firebase/controlador-fb.js";
import { components } from '../vistas/index.js';
import { changeRoute } from '../controlador-rutas/funciones.js';

export default () => {
  const viewCatalogue = `
  <header>
  <div class ="buscador">
  <img class="log flex1" src="../imgs/alicorp_web.jpg">
  <form class=" flex2 form-inline my-2 my-lg-0">
          <input id="buscar" class="form-input mr-sm-2" type="search" placeholder="¿Qué producto necesitas?">
          <i class="fa fa-search btn-search" aria-hidden="true"></i>

        </form>
  </div>
  <nav id="navbar-catalogo" class="navbar navbar-expand-lg navbar-light btn-danger">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav nav-fill w-100 mr-auto mt-2 mt-lg-0">
      <li id="btnConservas" class="nav-item active">
        <a class="nav-link text-white">Conservas<span class="sr-only">(current)</span></a>
      </li>
      <li id="btnAceites" class="nav-item">
        <a class="nav-link text-white">Aceites</a>
      </li>
      <li id="btnPastas" class="nav-item">
        <a class="nav-link text-white">Pastas</a>
      </li>
      <li  id ="btnDetergentes" class="nav-item">
        <a class="nav-link text-white ">Detergentes</a>
      </li>
      <li id="btnJabones" class="nav-item">
        <a class="nav-link text-white" tabindex="-1" aria-disabled="true">Jabones</a>
      </li>
      <li  id ="btnshopping" class="nav-item">
        <img id="btnCarrito" class="shopping-car" src="../imgs/shopping-cart.svg">
      </li>
    </ul>
    <div class="infoMenuDerecha">
    <img class="user" src="../imgs/man-user.svg" alt="Usuario Perfil"/>
    <p id="name">${currentUser().email}</p>
  </div>
  </div>
  <div id="cuadro"> <button type="button">cuadro</button></div>
</nav>

  </header>
  
    <div>
      <button id="btnOk">→</button>
    </div>
    <div id="containerCentral" class ="cardProd"></div>
    <div>
   `;
  const divElement = document.createElement('section');
  divElement.className = "body";
  divElement.innerHTML = viewCatalogue;
  const btnName = divElement.querySelector('#btnOk');
  /* CATEGORIAS DE PRODUCTOS */
  const buscador = divElement.querySelector('#buscador');
  const buscar = divElement.querySelector('#buscar');
  const btnConservas = divElement.querySelector('#btnConservas');
  const btnAceites = divElement.querySelector('#btnAceites');
  const btnPastas = divElement.querySelector('#btnPastas');
  const btnDetergentes = divElement.querySelector('#btnDetergentes');
  const btnJabones = divElement.querySelector('#btnJabones');
  const box = divElement.querySelector('#containerCentral');
  const btnCarrito = divElement.querySelector('#btnCarrito');

  buscar.addEventListener('click', () => {
    //show().then(response => console.log(response))
   console.log(show());
  //   box.innerHTML = '';
  // const inputName = data.filter(prod => prod.producto.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0);
  // if (event.target.value.length > 0) {
  //   if (inputName.length !== 0) {
  //     data.forEach(doc => {
  //       box.appendChild(components.products(doc))
  //     });
  //   } else {
  //     console.log('holi');
  //   }
  // }
  })
  
  divElement.querySelector('#cuadro').addEventListener('click', () => {
    changeRoute('#/cuadroestadistico');
    })
 
  btnCarrito.addEventListener('click', () => {
  changeRoute('#/resumencompra');
  })
  
  // let data = [];
  box.innerHTML = '';
  const show = () => {
    verDataFb('catálogo').then((querySnapshot) => {
    const array = [];
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
      
    });
    
    array.forEach(doc => {
      box.appendChild(components.products(doc))
    });
    
  })
  
} 
show();

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
