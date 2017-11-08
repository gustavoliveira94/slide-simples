var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");

function slide() {
setTimeout(function () {
    slider1.classList.add("esconder");
    slider2.classList.remove("esconder");
    slider3.classList.add("esconder");
}, 2000);

setTimeout(function () {
    slider1.classList.add("esconder");
    slider2.classList.add("esconder");
    slider3.classList.remove("esconder");
}, 4000);

setTimeout(function () {
    slider1.classList.remove("esconder");
    slider2.classList.add("esconder");
    slider3.classList.add("esconder");
}, 6000);
}

function repetirSlide() {
    setInterval(slide, 6000);
}
repetirSlide();