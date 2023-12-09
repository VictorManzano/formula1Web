AOS.init();


const menu = document.querySelector(".menu")

const escondido = document.querySelector(".menuEscondido")

menu.addEventListener("click", clicou)

function clicou() {
    escondido.classList.toggle("mudar")
}


