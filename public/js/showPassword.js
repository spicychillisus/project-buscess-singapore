// Get the checkbox element
const checkbox = document.getElementById('showPasswordCheckbox');

// Get the password input element
const passwordInput = document.getElementById('passwordInput');

// Add event listener to the checkbox
checkbox.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // Change the input type to "text" to show the password
    passwordInput.type = 'text';
  } else {
    // Change the input type back to "password" to hide the password
    passwordInput.type = 'password';
  }
});
