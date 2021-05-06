var ism = document.getElementById("ism")
ism.style.display='none'
document.getElementById("blg").style.display='none'

setTimeout(function() {
    ism.style.display='block'
    document.getElementById("ism").classList.add("animate__animated")
    document.getElementById("ism").classList.add("animate__slideInRight")
}, 2000)

setTimeout(function() {
    document.getElementById("blg").style.display='block'
    document.getElementById("blg").classList.add("animate__animated")
    document.getElementById("blg").classList.add("animate__slideInRight")
}, 4000)

console.log("niye burdasın çakal seni :)")
