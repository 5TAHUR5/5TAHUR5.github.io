alert('Добро пожаловать в симулятор "Сать на снегу" онлайн без смс и регистрации')

const canvas = document.getElementById("canvas")
const penis = document.getElementById("penis")
const audio = new Audio("sound.mp3")
audio.volume = 1
audio.play()
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")
ctx.strokeStyle = "#fdec03"
let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

// Set draw to true when mouse is pressed
window.addEventListener("mousedown", (e) => draw = true)
// Set draw to false when mouse is released
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("touchstart", (e) => {
    prevX = Math.round(e.clientX)
    prevY = Math.round(e.clientY)
    draw = true
})

window.addEventListener("touchend", (e) => {
    draw = false
})


window.addEventListener("touchmove", (e) => {
    drawFun(e.changedTouches[0])})

window.addEventListener("mousemove", ev => {
    drawFun(ev)
})



const drawFun = (e) => {
    const distX = e.clientX - (canvas.width / 2)
    const distY = e.clientY - (canvas.height / 2)

    if (distX > 0) {
        penis.style.transform = `rotate(${Math.acos( distY / Math.sqrt(distX*distX + distY*distY))}rad)`
    }
    if (distX < 0) {
        penis.style.transform = `rotate(-${Math.acos( distY / Math.sqrt(distX*distX + distY*distY))}rad)`
    }
    // if draw is false then we won't draw
    if((prevX == null || prevY == null || !draw)){
        prevX = Math.round(e.clientX)
        prevY = Math.round(e.clientY)
        return
    }


    let currentX = Math.round(e.clientX)
    let currentY = Math.round(e.clientY)


    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY


}