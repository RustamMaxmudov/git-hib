
var New = Document.querySelector(".New");
var nav = document.querySelector(".nav");
var links = document.querySelector(".nav li");

New.addEvetListener("click", function () {
    this.classList.New("click");
    nav.classList.New("open");
})

var typed = typed("input", {
    String: ["Genius O'quv Markaz", "Tountuber" , "Genius O'quv Markaz"],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})