window.onload = function () {

    var lid = document.querySelector(".lidTieContainer");
    // // Add Box animation 
    // setInterval(function () { box.classList.add("boxAnimation"); }, 3000);

    // // Remove the box animation after 3 seconds 
    setTimeout(function () {
        lid.style.visibility = "hidden";
    }, 5000);

}