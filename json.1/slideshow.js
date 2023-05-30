function slideshow() {
    var container = document.getElementById("slideshow-container");
    var images = container.getElementsByTagName("img");
    var index = 0;

    setInterval(function() {
        images[index].style.opacity = 0;
        index = (index + 1) % images.length;
        images[index].style.opacity = 1;
    }, 3000);
}

window.onload = function() {
    slideshow();
};
