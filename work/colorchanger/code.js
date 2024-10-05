// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button');
// Select the body element to change its background color
const body = document.querySelector('body');

// Iterate over each button
buttons.forEach(function (button) {
    console.log(button); // Log the button element to the console

    // Add a click event listener to each button
    button.addEventListener('click', function (e) {
        console.log(e); // Log the event object to the console
        console.log(e.target); // Log the target element (the button clicked)

        // Change the body's background color to the button's ID (color)
        body.style.backgroundColor = e.target.id;
    });
});
