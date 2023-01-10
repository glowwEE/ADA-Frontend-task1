const email = document.querySelector(".user-email");
const password = document.querySelector(".user-password");
const form = document.querySelector(".form");
const toastLiveExample = document.querySelector("#toastLive");
const toastLiveError = document.querySelector("#toastLiveError");

let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// function for email validation
const validateEmail = (email, emailField) => {
  if (!emailregex.test(email)) {
    emailField.classList.add("border-danger");
    document.querySelector(".email-error").innerHTML =
      "Please enter a valid email";
    return false;
  } else {
    emailField.classList.remove("border-danger");
    document.querySelector(".email-error").innerHTML = "";
  }
};

email.addEventListener("input", (e) => {
  validateEmail(e.target.value, e.target);
});

// function for password validation-length must be 8 or above on input
const validatePassword = (password, passwordinput) => {
  if (password.length < 8) {
    passwordinput.classList.add("border-danger");
    document.querySelector(".password-error").innerHTML =
      "Password must be atleast 8 characters";
    return;
  } else {
    passwordinput.classList.remove("border-danger");
    document.querySelector(".password-error").innerHTML = "";
  }
};

password.addEventListener("input", (e) => {
  validatePassword(e.target.value, e.target);
});

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const passwordValue = password.value;
  const emailValue = email.value;

  //check if the inputs are empty
  if (!passwordValue || !emailValue) {
    const toast = new bootstrap.Toast(toastLiveError);

    toast.show();
    return;
  }
  // email validation on submit
  if (!emailregex.test(emailValue)) {
    email.classList.add("border-danger");
    document.querySelector(".email-error").innerHTML =
      "Please enter a valid email";
    return false;
  } else {
    email.classList.remove("border-danger");
    document.querySelector(".email-error").innerHTML = "";
  }

  // password validation on submit
  if (passwordValue.length < 8) {
    password.classList.add("border-danger");
    document.querySelector(".password-error").innerHTML =
      "Password must be atleast 8 characters";
    return;
  } else {
    password.classList.remove("border-danger");
    document.querySelector(".password-error").innerHTML = "";
  }
  // loading
  document.querySelector(".login-btn").innerHTML = "Loading...";

  // success alert on submit
  const toast = new bootstrap.Toast(toastLiveExample);
  setTimeout(() => {
    document.querySelector(".login-btn").innerHTML = "Sign in";
    toast.show();
  }, 600);
});