import {
    btnDatos,
} from "../controlador-rutas/tabla.js";

import {colaborador} from '../controlador-firebase/controlador-fb.js';
let arr = [];
let obj = {
    sabor: null,
    adicional: []
};

export const changeRoute =(route)=>{
    window.location.hash=route;
}
export const rutaCatalogo= ()=>{
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    colaborador(callback=>{
      const respuesta= "";
      callback.forEach(doc=>{
        if(usuario===doc.id){
          respuesta.textContent="ven";
          // console.log("ven");
        }else{
          respuesta.textContent="nooooooo";
          // console.log("no");
        }
        // console.log(doc)})
    });
    console.log(respuesta);
});
}


export const templates = (doc) => {
    const btnBoton = document.createElement('button');
    btnBoton.className = 'btnProducto';
    btnBoton.setAttribute('data-id', doc.id);
    const temp = `<img class="card" src="${doc.data().url}">
    <p>${doc.data().producto}</p>
    <p>S/. ${doc.data().precio}</p>
    `;
    btnBoton.innerHTML = temp;
}
    // TEMPLATE SABORES AD.
//     const sabores = (doc)=> {
//       const btnAdi = document.createElement('div');
//       btnAdi.className = 'btnAdicionales';
//       // acumulador(sabores)
//       let acum = '';
//      doc.data().sabores.forEach(element => {
//        acum += `<th><button class="sabor"data-sabor="${element.valor}">${element.valor}</button></th>`
       
//      });
//      // acumulador (adicionales)
//     let acum2 = '';
//      doc.data().adicional.forEach(element => {
//          acum2 += `<th><button class="adicional" data-adicional="${element.adicional}">${element.adicional}</button></th>`
//      })
     
//      btnAdi.innerHTML += `<p>Tipos :</p>
//            ${acum}
//           <p>Adicionales(S./1)</p>
//           ${acum2}
//           <br>
//           <button class = "agregar">Agregar</button>
//      `;
      
//      const box = document.querySelector(`.btnProducto[data-id=${doc.id}]`); //papa
//      const lastChild = box.lastElementChild; // el ultimo hijo de box 
//     if (lastChild.classList.contains('btnAdicionales')){ //si el ultimo hijo tiene esa clase remuevelo
//         const removeLastChild = box.removeChild(lastChild);     
//     }else {   
//      //NADA .
//     }
//      box.appendChild(btnAdi);

   
 
//      const btnSabores = box.querySelectorAll('.sabor');
     
//     btnSabores.forEach(elemen =>{
//         elemen.addEventListener('click', (e) =>{ 
//         //    console.log( obj.sabor = e.target.dataset.sabor);
//          obj.sabor= e.target.dataset.sabor;
         
//           });

//     })
//     const btnAdicional = box.querySelectorAll('.adicional');
//         btnAdicional.forEach(elemen =>{   
//            elemen.addEventListener('click', (e) => {
//          obj.adicional.push(e.target.dataset.adicional) ;
         
//              });
//         })
    
//         const btnAgregar = box.querySelector('.agregar');
//      btnAgregar.addEventListener('click', () =>{   
//         const nuevoObj =  {
//             id: doc.id,
//             producto: doc.data().producto,
//             precio: parseInt(doc.data().precio)   ,
//             cantidad: 1,
//             sabor : obj.sabor,
//             adicional: obj.adicional
//         }
//         console.log(nuevoObj.adicional)
//         if (nuevoObj.adicional.length === 1 ){
//             nuevoObj.precio = parseInt(doc.data().precio) + 1;
//             arr.push(nuevoObj);
//            btnDatos(nuevoObj)
//            btnTotal(nuevoObj);
//         } else if(nuevoObj.adicional.length >= 2 ) {
//             nuevoObj.precio = parseInt(doc.data().precio) + 2 ;
//             console.log(nuevoObj.precio)
//             arr.push(nuevoObj);
//            btnDatos(nuevoObj)
//            btnTotal(nuevoObj);
//         } else {
//             btnDatos(nuevoObj)
//         btnTotal(nuevoObj);
//         }
        
//      })

//     }
   

//  //---------------
//     btnBoton.addEventListener('click', (e) => {
//         const obj = {
//             id: doc.id,
//             producto: doc.data().producto,
//             precio: doc.data().precio,
//             cantidad: 1,
//         }
//         const metodoFind = arr.find(eleId => eleId.id === obj.id);

//         if (doc.data().sabores) {
//        sabores(doc, e.target);
 
    
//         } else if (!metodoFind) {
//             arr.push(obj);
//             btnDatos(obj)
//             btnTotal(obj);
//         } else {
//             metodoFind.cantidad++;
//             btnDatos(metodoFind)
//             btnTotal(metodoFind);
//         }
//             localStorage.setItem('ordenes', JSON.stringify(arr));
//     });
    
// };



// export const arrProducto = JSON.parse(localStorage.getItem('ordenes', JSON.stringify(arr)));
