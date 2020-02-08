
// Init functions
addLight();
removeLid();
addVisibilityToElements();

// Hide  the box lid after animation ends
function removeLid() {
    var lid = document.querySelector(".lidTieContainer");
    setTimeout(function () {
        lid.style.visibility = "hidden";
    }, 5000);
}

function addVisibilityToElements() {
    var text = document.querySelector(".text");
    var mcafee = document.querySelector(".mcafee");
    var light = document.querySelector(".lightPlaceholder");
    setTimeout(function () {
        text.style.visibility = "visible";
        mcafee.style.visibility = "visible";
        light.style.visibility = "visible";
    }, 3000);
}
// Set light background and Confetti when box opens 
function addLight() {
    var light = document.querySelector(".lightPlaceholder");
    setTimeout(function () {
        light.innerHTML = "<div class='light'></div>";
        addConfetti();
    }, 3200);
}
// Add confetti
function addConfetti() {
    for (var i = 0; i < 60; i++) {
        create(i);
    }
    function create(i) {
        var width = Math.random() * 12;
        var height = width * 1.1;
        var colourIdx = Math.ceil(Math.random() * 3);
        var colour = "red";
        switch (colourIdx) {
            case 1:
                colour = "yellow";
                break;
            case 2:
                colour = "blue";
                break;
            default:
                colour = "red";
        }
        $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
            "width": width + "px",
            "height": height + "px",
            "top": -Math.random() * 20 + "%",
            "left": Math.random() * 100 + "%",
            "opacity": Math.random() + 0.5,
            "transform": "rotate(" + Math.random() * 360 + "deg)"
        }).appendTo('.confettiBox');
        drop(i);
    }

    function drop(x) {
        $('.confetti-' + x).animate({
            top: "100%",
            left: "+=" + Math.random() * 15 + "%"
        }, Math.random() * 3000 + 3000);
    }
}
