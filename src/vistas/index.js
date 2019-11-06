import catalogo from './catalogo.js';
import login from './login.js';
import loginOperario from './loginOperario.js';
import Home from './home.js';
import Different from './notFound.js';
import Products from './products.js';
import resumencompra from '../vistas/resumencompra.js';
import Usuario from '../vistas/usuario.js';
import cuadroestadistico from '../vistas/cuadroestadistico.js';
const components = {
    catalogo: catalogo,
    login:login,
   resumencompra:resumencompra,
    loginOperario: loginOperario,
    cuadroestadistico:cuadroestadistico,
    home: Home,
    different: Different,
    products: Products,
    usuario:Usuario,
}

export {
    components
}