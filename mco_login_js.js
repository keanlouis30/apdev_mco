const validUsers = {
    "user1": "pass1",
    "user2": "pass2",
    "user3": "pass3",
    "user4": "pass4",
    "user5": "pass5"
};

const validateLogin = (usernameInput, passwordInput) => {
    if (validUsers.hasOwnProperty(usernameInput)) {
        // Check if the password matches the stored password for the username
        if (validUsers[usernameInput] === passwordInput) {
            alert("Login successful!");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please check your username and try again.");
    }
}

const loginForm = document.getElementsByClassName("login-form")[0];

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from input fields
    const usernameInput = document.getElementsByName("username")[0].value;
    const passwordInput = document.getElementsByName("password")[0].value;

    // Call the validateLogin function with the retrieved values
    validateLogin(usernameInput, passwordInput);
});