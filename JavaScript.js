document.querySelector("button").addEventListener("click", function () {
  const email = document.querySelector("input[type='email']");
  const emailInput = document.querySelector(".email-input");
  const emailError = document.querySelector(".invalid-feedback");
  const errorIcon = document.querySelector(".invalid-icon");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.classList.add("emailError");
  if (email.value.trim() === "") {
    event.preventDefault();
    emailError.style.display = "block";
    errorIcon.style.display = "block";
    emailError.textContent = "Please enter your email address";
    emailInput.classList.add("error-border");
  } else if (!email.value.match(pattern)) {
    event.preventDefault();
    emailError.style.display = "block";
    errorIcon.style.display = "block";
    emailInput.classList.add("error-border");
  } else {
    emailError.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.classList.remove("error-border");
  }
});
