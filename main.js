let pere = document.querySelector(".fas")
let menuItems = document.querySelector(".navbar")

pere.addEventListener("click" , show)

function show(){
    menuItems.classList.toggle('navbar_toggle')
}

