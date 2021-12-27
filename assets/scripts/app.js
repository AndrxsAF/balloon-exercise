const colors = ['b-blue', 'b-pink', 'b-brown', 'b-red', 'b-yellow', 'b-green', 'b-orange', 'b-purple', 'b-black', 'b-beige']

const balloon1 = document.querySelector('#b1')
const balloon2 = document.querySelector('#b2')
const balloon3 = document.querySelector('#b3')
const balloon4 = document.querySelector('#b4')
const balloon5 = document.querySelector('#b5')
const balloon6 = document.querySelector('#b6')
const balloon7 = document.querySelector('#b7')
const balloon8 = document.querySelector('#b8')
const balloon9 = document.querySelector('#b9')
const balloon10 = document.querySelector('#b10')
const balloon11 = document.querySelector('#b11')
const balloon12 = document.querySelector('#b12')
const balloon13 = document.querySelector('#b13')
const balloon14 = document.querySelector('#b14')
const balloon15 = document.querySelector('#b15')
const balloon16 = document.querySelector('#b16')
const balloon17 = document.querySelector('#b17')
const balloon18 = document.querySelector('#b18')
const balloon19 = document.querySelector('#b19')
const balloon20 = document.querySelector('#b20')
const score = document.querySelector('#score')
const boton = document.querySelector('#boton')

const ballons = [balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8, balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16, balloon17, balloon18, balloon19, balloon20]
let cont = 20

// se activa con el botón, restaura los valores iniciales de los divs (globos) y reinicia el contador.

const render = () => {
    ballons.map((ballon) => {
        for (i in colors) {
            ballon.classList.remove(colors[i])
        }
        ballon.classList.add(randomColor())
        ballon.classList.remove("popped")
    })
    boton.innerHTML = 'Reiniciar'
    score.innerHTML = `Clickea un globo para explotarlo!!!`
    cont = 20
}

// asigna un numero del 0 al 9 para elegir un color random

const randomColor = () => {
    let random = Math.floor(Math.random() * 10)
    return colors[random]
}

// función que explota los globos, se encarga de manejar el contador, y de cambiar el inner text del boton y del score.

const popped = (event) => {
    if (event.srcElement.classList.length == 3){
        event.srcElement.classList.add("popped")
        cont--
        if (cont <= 0) {
            score.innerHTML = 'Felicitaciones, has ganado el juego, pulsa para repetir.'
            boton.innerHTML = 'Jugar de Nuevo'
        } else {
            score.innerHTML = `Sigue explotando globos, aún te quedan ${cont} globos.`
            boton.innerHTML = 'Reiniciar'
        } 
    }
}

//click events

balloon1.addEventListener("click", popped)
balloon2.addEventListener("click", popped)
balloon3.addEventListener("click", popped)
balloon4.addEventListener("click", popped)
balloon5.addEventListener("click", popped)
balloon6.addEventListener("click", popped)
balloon7.addEventListener("click", popped)
balloon8.addEventListener("click", popped)
balloon9.addEventListener("click", popped)
balloon10.addEventListener("click", popped)
balloon11.addEventListener("click", popped)
balloon12.addEventListener("click", popped)
balloon13.addEventListener("click", popped)
balloon14.addEventListener("click", popped)
balloon15.addEventListener("click", popped)
balloon16.addEventListener("click", popped)
balloon17.addEventListener("click", popped)
balloon18.addEventListener("click", popped)
balloon19.addEventListener("click", popped)
balloon20.addEventListener("click", popped)
boton.addEventListener("click", render)