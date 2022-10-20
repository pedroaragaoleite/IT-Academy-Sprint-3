// Exercise 6

function validate() {
  var error = 0;

  // Form validations inputs
  const letters = /^[A-Za-z]+$/;
  const letterNumber = /^[0-9a-zA-Z]+$/;
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  const phoneNumber = /^\d{9}$/;

  // Get the input fields
  var fName = document.getElementById("fName").value;
  var fEmail = document.getElementById("fEmail").value;
  var fAddress = document.getElementById("fAddress").value;
  var fLastN = document.getElementById("fLastN").value;
  var fPassword = document.getElementById("fPassword").value;
  var fPhone = document.getElementById("fPhone").value;

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  // Name vlidation
  if (fName === "" || fName.length <= 2 || !fName.match(letters)) {
    errorName.style.display = "block";
    errorName.classList.add("not-valid");
    error++;
  } else {
    errorName.style.display = "none";
    errorName.classList.remove("not-valid");
  }

  //LastName validation
  if (fLastN == "" || fLastN.length <= 2 || !fLastN.match(letters)) {
    errorLastN.style.display = "block";
    errorLastN.classList.add("not-valid");
    error++;
  } else {
    errorLastN.style.display = "none";
    errorLastN.classList.remove("not-valid");
  }

  //email validation
  if (fEmail == "" || fEmail.length <= 2 || !fEmail.match(emailFormat)) {
    errorEmail.style.display = "block";
    errorEmail.classList.add("not-valid");
    error++;
  } else {
    errorEmail.style.display = "none";
    errorEmail.classList.remove("not-valid");
  }

  // Address validation
  if (fAddress == "" || fAddress.length <= 2) {
    errorAddress.style.display = "block";
    errorAddress.classList.add("not-valid");
    error++;
  } else {
    errorAddress.style.display = "none";
    errorAddress.classList.remove("not-valid");
  }

  // Password Validation
  if (
    fPassword == "" ||
    fPassword.length < 4 ||
    fPassword.length >= 8 ||
    !fPassword.match(letterNumber)
  ) {
    errorPassword.style.display = "block";
    errorPassword.classList.add("not-valid");
    error++;
  } else {
    errorPassword.style.display = "none";
    errorPassword.classList.remove("not-valid");
  }

  // Phone validation
  if (!fPhone.match(phoneNumber)) {
    errorPhone.style.display = "block";
    errorPhone.classList.add("not-valid");
    error++;
  } else {
    errorPhone.style.display = "none";
    errorPhone.classList.remove("not-valid");
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
