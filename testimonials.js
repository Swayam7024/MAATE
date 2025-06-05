// Function to handle card flip and back button functionality
document.querySelectorAll('.flip-card').forEach((card) => {
    const flipCardInner = card.querySelector('.flip-card-inner');
    const backButton = card.querySelector('.back-button');

    card.addEventListener('click', function () {
        if (!card.classList.contains('fullscreen')) {
            card.classList.add('fullscreen'); // Zoom to full screen
            card.classList.add('clicked');    // Trigger the flip
        }
    });

    // Back button click event to reverse the flip and return to portrait mode
    backButton.addEventListener('click', function (e) {
        e.stopPropagation();  // Prevent triggering the flip card click event
        card.classList.remove('fullscreen');
        card.classList.remove('clicked');
    });
});
