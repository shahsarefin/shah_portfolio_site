//Dynamically rendering name and work
const nameLetters = document.querySelectorAll('#home__name span');
const workLetters = document.querySelectorAll('#home__work span');

let delay = 0;

nameLetters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.transform = 'translateX(0)';
        letter.style.opacity = '1';
    }, delay);

    delay += 100;
});

// Additional delay for the #home__work to start after #home__name is finished.
workLetters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.transform = 'translateX(0)';
        letter.style.opacity = '1';
    }, delay);

    delay += 100;
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.add('open');
    });

    navClose.addEventListener('click', function() {
        navMenu.classList.remove('open');
    });
});



//skills bar dynamically loading
document.addEventListener("DOMContentLoaded", function() {
    let skillBars = document.querySelectorAll(".skill-bar");

    for(let i = 0; i < skillBars.length; i++) {
        let percent = skillBars[i].getAttribute("data-percent");
        skillBars[i].querySelector(".filled").style.width = `${percent}%`;
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        console.log('submit');
        // Prevent the default form submission behavior
        event.preventDefault();
        event.stopPropagation();  // Stop event from bubbling up further

        let valid = true;

        // Validate Name
        const nameInput = document.getElementById('contact-name');
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required.');
            valid = false;
        }

        // Validate Phone Number
        const phoneInput = document.getElementById('contact-phone');
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, 'Enter a valid 10-digit phone number.');
            valid = false;
        }

        // Validate Email
        const emailInput = document.getElementById('contact-email');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Enter a valid email address.');
            valid = false;
        }
        // Validate Message
    const messageInput = document.getElementById('message');
    if (!messageInput.value.trim()) {
        showError(messageInput, 'Message is required.');
        valid = false;
    }

        if (valid) {
            alert("Your submission has been sent successfully!");
            // If all validations pass, then redirect to the homepage
            window.location.href = 'index.html';
        }

    });

    form.addEventListener('reset', function(event) {
        console.log('reset')
        event.stopPropagation();  // Stop event from bubbling up further

        // Get all error messages and hide them
        let errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(errorElement => {
            errorElement.style.display = 'none';
        });
    });

    function showError(input, message) {
        console.log('sghow error');
        // If there's no error message placeholder, we'll create one
        let errorMsg = input.nextElementSibling;
        if(!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('span');
            errorMsg.classList.add('error-message');
            errorMsg.style.color = 'red';
            errorMsg.style.display = 'block';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }
        
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
        input.focus();
        input.select();  // Highlight the input field content
    }

});



