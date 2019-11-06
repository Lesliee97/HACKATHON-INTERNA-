export default (obj) => {
    const viewProd = `
    <div>
    <img  class ="card"src="${obj.url}">
            
     </div> 
    `;
    const divElement = document.createElement('section');
    // divElement.className = "body";
    divElement.innerHTML = viewProd;

    return divElement;
}