var i = 0;
var txt = "I'm Logan Logic";
var speed = 200;

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