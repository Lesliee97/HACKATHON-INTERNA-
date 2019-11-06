import { colaborador } from '../controlador-firebase/controlador-fb.js';
import { changeRoute } from '../controlador-rutas/funciones.js';

export default () => {
  const login = `
  <div class="container h-100">
  <div class="d-flex justify-content-around mb-2">
   <img class="alicorp-logo-login"src="../imgs/Copy-of-logo_Alta.jpg">
    <div class="user_card">
      <div class="d-flex justify-content-center">
      <div class="bienvenida">
        <h4>¡Bienvenido Colaborador!</h4>
        <p>Ingresa aquí para hacer tus pedidos</p>
      </div>
        </div>
      <div class="d-flex justify-content-center form_container">
        <form>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input  id="usuario"type="text" name="" class="form-control input_user" value="" placeholder="Usuario">
          </div>
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fa fa-lock"></i></span>
            </div>
            <input type="password" id="password" name="" class="form-control input_pass" value="" placeholder="Contraseña">
          </div>
          <div class="form-group">
          </div>
            <div class="d-flex justify-content-center mt-3 login_container">
         <button  id="btn-ingresar"type="button" name="button" class="btn login_btn">Ingresar</button>
         </div>
        </form>
      </div>
      <div class="mt-4">
    </div>
  </div>
</div>
`;
  const divElem = document.createElement('div');
  divElem.innerHTML = login;
  const btnIngresar = divElem.querySelector('#btn-ingresar');
  btnIngresar.addEventListener('click', (event) => {
    event.preventDefault();
    const usuario = divElem.querySelector('#usuario').value;
    const password = divElem.querySelector('#password').value;
    colaborador(callback => {
      let respuesta = "";
      callback.forEach(doc => {
        if (usuario === doc.id) {
          respuesta = true;
          // console.log("ven");
        } else {
          respuesta = false;
          // console.log("no");
        }
        // console.log(doc)})
      });
if(respuesta===true){
  changeRoute('#/mesero');
}else{
  console.log("verifica tu código");
}
      // console.log(respuesta);
    });
  });
  return divElem;
};