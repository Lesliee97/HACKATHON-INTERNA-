// Este es el punto de entrada de tu aplicacion
import { changeTmp } from './controlador-rutas/router.js';

const firebaseConfig = {
    apiKey: "AIzaSyAOa6XSJSE6FXGYswoNQsaAJApFPiVKD4w",
    authDomain: "hackinterna-81c68.firebaseapp.com",
    databaseURL: "https://hackinterna-81c68.firebaseio.com",
    projectId: "hackinterna-81c68",
    storageBucket: "hackinterna-81c68.appspot.com",
    messagingSenderId: "55842054386",
    appId: "1:55842054386:web:b668340f01facdc222b06b",
    measurementId: "G-DY8NRWV5K8"
};

firebase.initializeApp(firebaseConfig);

const init = () => {
    changeTmp(window.location.hash)
    window.addEventListener('hashchange', () => changeTmp(window.location.hash))
    
}
window.addEventListener('load', init)