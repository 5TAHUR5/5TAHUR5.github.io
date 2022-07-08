const hWrapper = document.getElementById("hWrapper")
const audio = document.getElementById("audio")
const canvas = document.getElementById("canvas")
const penis = document.getElementById("penis")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
//audio.style = "width: 84px;"
const ctx = canvas.getContext("2d")
ctx.strokeStyle = "#fdec03"
let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false
let start = false

audio.onplay = () => {
    start = true
    hWrapper.style = "display: none;"
    setTimeout(() => {
        document.location.href = 'https://ars434.github.io/MVDRF.github.io/'
    },10000)
}

// Set draw to true when mouse is pressed
window.addEventListener("mousedown", (e) => {if (start) {draw = true}})
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