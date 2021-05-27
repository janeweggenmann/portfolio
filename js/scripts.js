(function() {
  let form = document.querySelector("#contact-form");
  let emailInput = document.querySelector("#contact-email");
  let messageInput = document.querySelector("#contact-message");

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage (emailInput, "Email is required");
      return false;
    }
    let hasAtSign = value.indexOf("@")> -1;
    if (value.indexOf("@")=== -1) {
      showErrorMessage (emailInput, "You must enter a valid email address");
      return false;
    }
    let hasDot = value.indexOf(".")> -1;

    showErrorMessage(emailInput, null);
    return true;
    return value && hasAtSign && hasDot;
  }

  function validateMessage() {
    let value = messageInput.value;
    if (!value) {
      showErrorMessage(messageInput, "You must enter a message");
      return false;
    }

    if (value.length < 1) {
      showErrorMessage(passwordInput, "You must enter a message");
      return false;
    }
    showErrorMessage(messageInput, null);
    return true;
    return value && value.length >= 1;

  }

  function validateForm() {
    return validateEmail() && validateMessage();
  }

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector(".error-message");
    if (error)  {
      container.removeChild(error);
    }
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
     // Do not submit to the server
    if (validateForm()) {
      console.log('Success!');
    }
  })

  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validateMessage);
})();
