var projeler = document.getElementById("projelerim")
var bilgi = document.getElementById("bilgi")
var sosyal = document.getElementById("sosyal")
projeler.style.display = "none"
sosyal.style.display = "none"

function hak() {
  sosyal.style.display = "none"
  projeler.style.display = "none"
  bilgi.style.display = "block"
  bilgi.classList.add("animate__slideInRight")
  projeler.classList.remove("animate__slideInRight")
  sosyal.classList.remove("animate__slideInRight")
}

function pro() {
  bilgi.style.display = "none"
  sosyal.style.display = "none"
  projeler.style.display = "block"
  projeler.classList.add("animate__slideInRight")
  bilgi.classList.remove("animate__slideInRight")
  sosyal.classList.remove("animate__slideInRight")
}

function sos() {
  bilgi.style.display = "none"
  projeler.style.display = "none"
  sosyal.style.display = "block"
  sosyal.classList.add("animate__slideInRight")
  bilgi.classList.remove("animate__slideInRight")
  projeler.classList.remove("animate__slideInRight")
}

var projeler = document.getElementById("projelerim")
var bilgi = document.getElementById("bilgi")
var sosyal = document.getElementById("sosyal")
projeler.style.display = "none"
sosyal.style.display = "none"

function hak() {
  sosyal.style.display = "none"
  projeler.style.display = "none"
  bilgi.style.display = "block"
  bilgi.classList.add("animate__slideInRight")
  projeler.classList.remove("animate__slideInRight")
  sosyal.classList.remove("animate__slideInRight")
}

function pro() {
  bilgi.style.display = "none"
  sosyal.style.display = "none"
  projeler.style.display = "block"
  projeler.classList.add("animate__slideInRight")
  bilgi.classList.remove("animate__slideInRight")
  sosyal.classList.remove("animate__slideInRight")
}

function sos() {
  bilgi.style.display = "none"
  projeler.style.display = "none"
  sosyal.style.display = "block"
  sosyal.classList.add("animate__slideInRight")
  bilgi.classList.remove("animate__slideInRight")
  projeler.classList.remove("animate__slideInRight")
}

function egl() {
    bilgi.contentEditable = true
    projeler.contentEditable = true
    sosyal.contentEditable = true
}
