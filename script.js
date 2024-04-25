const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName == "") {
    addError("firstname", "First Name cannot be empty");
  } else {
    removeError("firstname");
  }

  if (lastName == "") {
    addError("lastname", "Last Name cannot be empty");
  } else {
    removeError("lastname");
  }

  if (email == "") {
    addError("email", "Email cannot be empty");
  } else if (!isvalid(email)) {
    addError("email", "Email is not valid");
  } else {
    removeError("email");
  }

  if (password == "") {
    addError("password", "Password cannot be empty");
  } else {
    removeError("password");
  }
});

function addError(field, message) {
  const formControl = form[field].parentElement;
  formControl.classList.add("error");
  const small = form[field].parentElement.querySelector("small");
  small.innerText = message;
}
function removeError(field) {
  const formControl = form[field].parentElement;
  formControl.classList.remove("error");
}

function isvalid(email) {
  const pattern = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
  return pattern.test(String(email).toLowerCase());
}
