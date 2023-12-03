document.addEventListener("DOMContentLoaded", function () {
    var volunteerButton = document.getElementById("volunteerButton");
    var volunteerForm = document.getElementById("volunteerForm");
    var successMessage = document.getElementById("successMessage");

    var volunteerCounter = 0;

    volunteerButton.addEventListener("click", function () {
        // Toggle the display of the volunteer form
        if (volunteerForm.style.display === "none") {
            volunteerForm.style.display = "block";
            successMessage.style.display = "none"; // Hide the success message when the form is displayed
        } else {
            volunteerForm.style.display = "none";
        }
    });

    // Function to update counter
    function updateCounterDisplay() {
        var counterElement = document.getElementById("volunteerCounter");
        counterElement.textContent = volunteerCounter;
    }

    // Initial display of the counter value
    updateCounterDisplay();

    // Assign the submitForm function to the form's onsubmit attribute
    document.getElementById("volunteerForm").onsubmit = function (event) {
        event.preventDefault(); // Prevent the form from actually submitting

        volunteerCounter++;
        updateCounterDisplay();

        // Assuming your form validation logic here
        // For simplicity, let's assume the form is always submitted successfully

        // Display the success message and hide the form
        successMessage.style.display = "block";
        volunteerForm.style.display = "none";
    };
});