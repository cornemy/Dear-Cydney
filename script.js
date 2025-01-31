document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0; // Starting from the first slide
    const slides = document.querySelectorAll('.slide');
    const audio = document.getElementById('birthday-audio'); // Get the audio element

    // Function to show the next slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Show the first slide (Birthday Card)
    showSlide(currentSlide);

    // Event listeners for each button to control the flow
    const showValentineButton = document.getElementById('show-valentine');
    const nextValentineButton = document.getElementById('next-valentine');
    const nextHmmButton = document.getElementById('next-hmmm');
    const nextHmmButton2 = document.getElementById('next-hmmm-2');
    const nextHmmButton3 = document.getElementById('next-hmmm-3');
    const nextValentineMessageButton = document.getElementById('next-valentine-message');
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');

    let noButtonClickCount = 0; // To track how many times the "No" button has been clicked

    // Play audio and go to the Valentine Proposal section
    showValentineButton.addEventListener('click', function() {
        currentSlide = 1;
        showSlide(currentSlide);
        
        // Try to play the audio
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Go to the next slide (Birthday Wishes)
    nextValentineButton.addEventListener('click', function() {
        currentSlide = 2;
        showSlide(currentSlide);
    });

    // Show first "Hmm"
    nextHmmButton.addEventListener('click', function() {
        currentSlide = 3;
        showSlide(currentSlide);
    });

    // Show second "Hmm"
    nextHmmButton2.addEventListener('click', function() {
        currentSlide = 4;
        showSlide(currentSlide);
    });

    // Show third "Hmm"
    nextHmmButton3.addEventListener('click', function() {
        currentSlide = 5;
        showSlide(currentSlide);
    });

    // Show "Yes or No" Section
    nextValentineMessageButton.addEventListener('click', function() {
        currentSlide = 6;
        showSlide(currentSlide);
    });

    // Handle "Yes" button click (go to Happy section)
    yesButton.addEventListener('click', function() {
        currentSlide = 7;
        showSlide(currentSlide);
    });

    // Handle "No" button click (show confirmation)
    noButton.addEventListener('click', function() {
        // Cycle through different text after each click
        noButtonClickCount++;

        if (noButtonClickCount === 1) {
            noButton.innerText = "Are you sure? 😅";
        } else if (noButtonClickCount === 2) {
            noButton.innerText = "Pretty please? 😘";
        } else if (noButtonClickCount === 3) {
            noButton.innerText = "Come on... 😢";
        } else if (noButtonClickCount === 4) {
            noButton.innerText = "Please? 🥺";
        } else {
            // Reset back to the original prompt after a few attempts
            noButton.innerText = "No...";
            noButtonClickCount = 0; // Reset the cycle after some time
        }
    });
});
