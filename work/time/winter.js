// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock'); // Get the clock element
    console.log(clock); // Log the clock element to the console for debugging

    // Check if the clock element exists
    if (clock) {
        // Update the clock every second
        setInterval(() => {
            const date = new Date(); // Get the current date and time
            clock.innerHTML = date.toLocaleTimeString(); // Display the current time in the clock element
        }, 1000);
    } else {
        // Log an error if the clock element is not found
        console.error('Clock element not found.');
    }
});


// Local Time Display Project

// This project features a simple web page that displays the local time of the user's device, updated every second. It utilizes HTML, CSS, and JavaScript to create a visually appealing and functional clock.

// File Descriptions:
// HTML (index.html):

// This file contains the structure of the web page. It includes a title, a container for the clock, and links to the CSS and JavaScript files.
// The <div class="banner"> displays a message above the clock.
// CSS (winter.css):

// This file styles the layout and appearance of the web page.
// The body has a light blue background, and flexbox is used to center the clock in the viewport.
// The clock has a distinct style with padding, font settings, and background color to enhance visibility.
// JavaScript (winter.js):

// This script updates the clock element every second with the current local time.
// It waits for the DOM content to load before executing and logs errors if the clock element is not found.
// Usage
// To use this project, simply open the index.html file in a web browser. The local time will be displayed and updated in real-time. You can customize the styles in the CSS file or modify the JavaScript to add additional features as desired.
