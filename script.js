// Add event listener for password input fields.
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const errorMessage = document.querySelector(".error-message");

password.addEventListener("change", function () {
   let passwordText = this.value;
   console.log(passwordText);
});

confirmPassword.addEventListener("change", function () {
    let confirmPasswordText = this.value;
    console.log(confirmPasswordText);
    
    if (password.value !== confirmPasswordText) {
        console.log("Passwords do not match");
        confirmPassword.className = "error";
        errorMessage.textContent = "Passwords do not match!"

    } else {
        console.log("Passwords match");
        confirmPassword.className = "";
        errorMessage.textContent = "";
    }
});
