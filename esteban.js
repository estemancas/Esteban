let name = prompt("como te llamas?")
alert(name + " toca la foto")

const foto = document.getElementById("foto")
const foto1 =document.getElementById("foto1")
foto.addEventListener ('click', siguientefoto)
foto1.addEventListener ('click', siguientefoto)
foto.addEventListener ('ontouchstart', siguientefoto)
foto1.addEventListener ('ontouchstart', siguientefoto)
foto1.style.display = 'none'

function siguientefoto() {
    if(foto1.style.display === 'none'){
        foto.style.display = 'none'
        foto1.style.display = 'flex'
    }else{
        foto1.style.display = 'none'
        foto.style.display = 'flex'
    }
}