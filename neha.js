// about section 

const dropBtn = document.querySelector('.dropbtn');
if (dropBtn) { // the dropdown only exists on index.html
    dropBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link default behavior
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// home 6 photos 

let autoSlideIntervals = {};

function startAutoSlide(slideshowId) {
    autoSlideIntervals[slideshowId] = setInterval(() => {
        moveSlide(1, slideshowId);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide(slideshowId) {
    clearInterval(autoSlideIntervals[slideshowId]);
}

function moveSlide(direction, slideshowId) {
    const slides = document.querySelector(`#${slideshowId} .slides`);
   const totalSlides = slides.children.length;
    let currentIndex = parseInt(slides.dataset.currentIndex) || 0;

    stopAutoSlide(slideshowId); // Stop auto slide on button click

    currentIndex += direction;

    // Loop back to the start or end if out of bounds
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Jump to the first slide
    } else if (currentIndex < 0) {  
        currentIndex = totalSlides - 1; // Go to the last slide if moving backward
    }

    // Move the slides
    const offset = - currentIndex * 100; // Adjust based on your layout
    slides.style.transform = `translateX(${offset}%)`;
    slides.dataset.currentIndex = currentIndex; // Store current index

    startAutoSlide(slideshowId); // Restart auto sliding after manual control
}

// Start the auto slideshow for all slideshows
document.querySelectorAll('.slideshow-container').forEach(container => {
    const slideshowId = container.id;
    startAutoSlide(slideshowId);
});
