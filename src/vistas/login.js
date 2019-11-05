
export default () => {
    const login = `
    
<section class="login-block">
<div class="container">
  <div class="row">
    <div class="col-md-4 login-sec">
      <img class="log" src="../imgs/alicorp_web.jpg">
      <form class="login-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Usuario">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Contraseña">
        </div>
        <div>
         <a href="#/mesero" class="btnMesero"><span class="spanMesero">Ingresar</span></a>
        </div>
      </form>
    </div>
    <div>
      <img class="img-login" src="../imgs/operarios.jpg">
    </div>
  </div>
</section>
`;
    const divElem = document.createElement('div');
    divElem.innerHTML = login;

    const mensajeError = divElem.querySelector('#mensaje-error');
    const btnIngresar = divElem.querySelector('#btn-ingresar');

    // btnIngresar.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   const email = divElem.querySelector('#txt-email').value;
    //   const pass = divElem.querySelector('#txt-password').value;
    //   loginFunction(email, pass, mensajeError);
    // });
 
    return divElem;
  };