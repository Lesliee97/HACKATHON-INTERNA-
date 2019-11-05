export default () => {
    const viewHome = `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
    <img class="logo" src="imgs/alicorp_web.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Nosotros <span class="sr-only">(current)</span></a>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Producto y Soluciones
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Consumo</a>
                <a class="dropdown-item" href="#">B2B</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Acuicultura</a>
              </div>
            </li>
          <li class="nav-item">
                <a class="nav-link" href="#">Sostenibilidad</a>
              </li>
              <li class="nav-item">
                    <a class="nav-link" href="#">Oportunidades Alicorp</a>
                  </li>
                  <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Sala de Prensa
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
       
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div class="linkNext">
    <a href="#/mesero" class="btnMesero"><span class="spanMesero">¿ERES OPERARIO?</span></a>
    <a href="#" class="btnCocinero"><span class="spanCocinero">mm</span></a>
    </div>
  </nav>
  </header>
  <body>
  <video class="video-banner" src="video/httpswww.alicorp.com.pemediaMP4alicorp_manifesto_ONLINE_RE_e.mp4"  autoplay muted loop  ></video>
 

  </body>
  <footer>
  
  </footer> 
    `;

    const divElement = document.createElement('section');
    divElement.className = "body";
    divElement.innerHTML = viewHome;

    return divElement;
}