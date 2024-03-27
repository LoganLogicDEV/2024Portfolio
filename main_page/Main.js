var i = 0;
var intro = "I'm Logan Logic";
var speed = 100;

function introWriter() {

    if (i < intro.length) {

        document.getElementById("hello").innerHTML += intro.charAt(i);
        i++;
        setTimeout(introWriter, speed);

    } else {

        var hello = document.getElementById("hello");
        hello.classList.remove("typing");

    }

}

function bannerLoad() {

    setTimeout(introWriter, 1000);

}