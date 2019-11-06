export default (obj) => {
    const usuario = `
    <p class="name-prod">${obj.Nombre}</p>
    `;
    const divElement = document.createElement('section');
    divElement.innerHTML = usuario;
    return divElement;
}
