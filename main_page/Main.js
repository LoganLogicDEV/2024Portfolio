var i = 0;
var txt = "I'm Logan Logic";
var speed = 200;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("hello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

}

function bannerLoad() {

    setTimeout(typeWriter, 1000);

}