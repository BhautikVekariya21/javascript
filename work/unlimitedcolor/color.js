// Function to generate a random hex color
const randomcolor = () => {
    const hex = '0123456789ABCDEF'; // Possible hex digits
    let color = '#'; // Start with a '#' for hex color
    for (let i = 0; i < 6; i++) {
        // Generate a random index to select a hex digit
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color; // Return the generated color
};

let intervalid = null; // Variable to hold the interval ID
const originalColor = '#E6E6FA'; // Store the original background color

// Function to start changing the background color
const changebackgroundcolor = () => {
    // Only start if there isn't already an interval running
    if (!intervalid) {
        intervalid = setInterval(() => {
            // Change the body's background color to a random color every 1717 milliseconds
            document.body.style.backgroundColor = randomcolor();
        }, 1717);
    }
};

// Function to stop changing the background color
const stopbackgroundcolor = () => {
    clearInterval(intervalid); // Clear the interval
    intervalid = null; // Reset the interval ID
    document.body.style.backgroundColor = originalColor; // Restore the original background color
    console.log('stop button pressed'); // Log when the stop button is pressed
};

// Event listeners for the start and stop buttons
document.querySelector('.start').addEventListener('click', changebackgroundcolor);
document.querySelector('.stop').addEventListener('click', stopbackgroundcolor);
