
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".banner .slider .item");
    let currentIndex = 0;
    const totalItems = items.length;

    // Initialize positions based on --position variable
    items.forEach((item, index) => {
        item.style.setProperty('--position', index + 1);
        item.addEventListener('click', () => {
            selectItem(index);
        });
    });

    function selectItem(index) {
        currentIndex = index;
        updateCarousel();
    }

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("selected");
            const newPosition = (index - currentIndex + totalItems) % totalItems; // Circular positioning
            item.style.setProperty('--position', newPosition + 1);
        });
        items[currentIndex].classList.add("selected"); // Highlight the selected item
    }

    // Function to automatically slide the carousel
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems; // Increment index and wrap around
        updateCarousel();
    }

    // Set interval for automatic sliding (every 5 seconds)
    setInterval(autoSlide, 5000);

    // Initialize carousel
    updateCarousel();
});
