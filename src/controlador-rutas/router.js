import { components } from '../vistas/index.js';
// import { readPosts } from '../controlador-firebase/controlador-fb'

export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.home());
        break;
        case '#/login': 
        sectionMain.appendChild(components.login());
        break;
        case '#/mesero': 
        // readPosts((call) => {
            // sectionMain.innerHTML = '';
        sectionMain.appendChild(components.loginOperario());
            // root.appendChild(viewHome(call));
        //   });
        break;
        case '#/resumencompra': 
        sectionMain.appendChild(components.resumencompra());
        break;
        case '#/cocinero': 
        sectionMain.appendChild(components.catalogo());
        break;
        default:
        sectionMain.appendChild(components.cuadroestadistico());
        case '#/cuadroestadistico': 
        break;
    }
};