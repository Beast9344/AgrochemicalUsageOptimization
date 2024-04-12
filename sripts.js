/** * Variables */
const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const userForms = document.getElementById('user_options-forms');
/** * Add event listener to the "Sign Up" button */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight');
  userForms.classList.add('bounceLeft');
}, false);

/** * Add event listener to the "Login" button */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft');
  userForms.classList.add('bounceRight');
}, false);

/** * Simulated successful login and redirect to homeDashboard */

document.getElementById('loginId').addEventListener('click',()=>{
console.log('clicked');
event.preventDefault(); // Prevent form submission
  
const exampleEmail = "example@gmail.com";
const examplePassword = "password";
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');

if (emailInput.value === exampleEmail && passwordInput.value === examplePassword) {
  // Alert for successful login
  alert("Login successful!");

  // Redirect to homeDashboard.html after successful login
  window.location.href = "homeDashboard.html"; // Change to the path of your home dashboard page
} else {
  // Alert for invalid credentials
  alert("Invalid email or password");
}
})


/** * Simulated successful signup and redirect to homeDashboard */
function signup(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform signup logic (replace with your actual signup logic)
  const exampleName = "Rafiq";
  const exampleEmail = "rafiq@gmail.com";
  const examplePassword = "password";
  const nameInput = document.getElementById('signup-name');
  const emailInput = document.getElementById('signup-email');
  const passwordInput = document.getElementById('signup-password');

  if (nameInput.value !== "" && emailInput.value === exampleEmail && passwordInput.value === examplePassword) {
    // Alert for successful signup
    alert("Signup successful for Rafiq!");

    // Redirect to homeDashboard.html after successful signup

    window.location.href = "homeDashboard.html"; // Change to the path of your home dashboard page
  } else {
    // Alert for invalid signup attempt
    alert("Signup failed. Please check your details.");
  }
}
