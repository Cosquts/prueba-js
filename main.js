
const objeto = { 
    nombre: "seba",
    edad: 25
}


const nombre = document.getElementById("login")

const subMenu = document.getElementById("submenu")

nombre.addEventListener("click",()=>{
    subMenu.classList.toggle("hola")
    nombre.classList.toggle("hola")
    console.log(subMenu)

})





