// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and results display elements
    const form = document.querySelector('#bmiForm'); // Get the BMI form
    const results = document.querySelector('.results'); // Get the results display area

    // Add an event listener for the form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get and parse the height and weight input values
        const height = parseInt(document.querySelector('#height').value); // Height in cm
        const weight = parseInt(document.querySelector('#weight').value); // Weight in kg

        // Validate the height input
        if (isNaN(height) || height <= 0) {
            results.innerHTML = `Please give a valid height.`; // Display error message if height is invalid
        } 
        // Validate the weight input
        else if (isNaN(weight) || weight <= 0) {
            results.innerHTML = `Please give a valid weight.`; // Display error message if weight is invalid
        } 
        // Calculate BMI if both inputs are valid
        else {
            // Calculate BMI using the formula: weight (kg) / (height (m))^2
            const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Convert height to meters and calculate BMI
            let category = ''; // Initialize the category variable

            // Determine the BMI category based on the calculated BMI
            if (bmi < 18.6) {
                category = 'Underweight'; // Category for BMI less than 18.6
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                category = 'Normal weight'; // Category for BMI between 18.6 and 24.9
            } else {
                category = 'Overweight'; // Category for BMI greater than 24.9
            }
            // Display the calculated BMI and corresponding category
            results.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
        }
    });
});

// Summary of Comments
// DOM Content Loaded: The outer event listener ensures that the script runs only after the DOM is fully loaded.
// Element Selection: Comments indicate which elements are being selected and why.
// Form Submission: The form's submit event is handled to prevent default behavior and to perform validations.
// Input Validation: Each validation step for height and weight is commented to clarify what is being checked.
// BMI Calculation: Comments explain how the BMI is calculated and how categories are determined based on BMI values.
// Result Display: The final result display is also explained to clarify what information is being presented to the user.
