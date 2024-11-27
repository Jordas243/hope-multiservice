$(document).ready(function() {
    var currentIndex = 0;
    var images = $(".carousel-slide img");
    var totalImages = images.length;

    function showNextImage() {
        images.eq(currentIndex).fadeOut(1000);
        currentIndex = (currentIndex + 5) % totalImages;
        images.eq(currentIndex).fadeIn(1000);
    }

    setInterval(showNextImage, 3000);  // Change image every 3 seconds
});
