function validatePassword(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value;
    const correctPassword = "1234"; // Set the correct password here
    const errorMessage = document.getElementById("error-message");

    if (password === correctPassword) {
        window.location.href = "welcome.html"; // Redirect to new page if password is correct
    } else {
        errorMessage.style.display = "block"; // Show error message if password is incorrect
    }
}