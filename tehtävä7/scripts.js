var images = [
    'images/image2.jpg', 
    'images/image4.jpg', 
    'images/image5.jpg'
];
var currentIndex = 0;

function showImage(index) {
    var img = document.getElementById('currentImage');
    img.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

window.onload = function() {
    showImage(currentIndex);
}