// import {drawSales} from '../controlador-rutas/graficos.js';

    export default () => {
    const cuadroestadistico = `
    <div id="chart_div"></div>`;
    const divElement = document.createElement('section');
    divElement.innerHTML = cuadroestadistico;
    return divElement;
}
