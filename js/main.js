//import {} from "./module/facturacion.js"
const menu = document.querySelector (".menu");
const menuBtn = document.querySelector(".menu-btn");

// opnen/close menu funcionality
menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
})
