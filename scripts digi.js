document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const images = document.querySelectorAll(".carousel-images img");
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    // Initialize carousel display
    updateCarousel();
});
