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

function theme() {
  if(document.getElementById("body").classList.value === "blackTheme") {
    document.getElementById("theme").innerHTML = "dark mode"
    document.getElementById("body").classList.remove("blackTheme")
    document.getElementById("theme").classList.add("white")
  } else {
    document.getElementById("body").classList.add("blackTheme")
    document.getElementById("theme").classList.remove("white")
    document.getElementById("theme").innerHTML = "light mode"
  }
}
