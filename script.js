window.onscroll = function() {myFunction()};

var header = document.getElementById("butonlar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("bas");
  } else {
    header.classList.remove("bas");
  }
}

function projelerim() {
    window.scrollTo(5,0)
}

function sosyal() {
    var sos = document.getElementById('sos');
    var pos = sos.offsetTop;
    window.scrollTo(pos,0)
}

function hakkimda() {
    var sos = document.getElementById('hak');
    var pos = sos.offsetTop;
    window.scrollTo(0,pos)
}