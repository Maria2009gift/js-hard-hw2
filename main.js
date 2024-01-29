
// =====1=====

const slider = document.querySelector(".slider__input")
const img = document.querySelector(".slider__image")

const a = _.debounce(function debounce_fun() {
    let sizeImg = 400 * slider.value / 100
    img.style.width = `${sizeImg}px`
}, 300);

slider.addEventListener("click", a)

// =====2=====
// const body = document.querySelector("body")
const box = document.querySelector("#box")
document.addEventListener("mousemove", _.debounce(function (event) {
    let x = event.clientX
    let y = event.clientY

    box.style.left = `${x}px`
    box.style.top = `${y}px`

}, 100))




