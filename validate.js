const errMsg = document.getElementById("error_message");
const successMsg = document.getElementById("success_message");



let registrationForm = document.querySelector("#form_all");
registrationForm.addEventListener("submit", function (event) {
  if (!validateForm()) event.preventDefault();
});

let checkUserName = () => {
  let inputEl = document.querySelector("#name");
  let inputFeedbackEl = document.querySelector("#reply_name");
  let regExp = /^[a-zA-Z]{3,20}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
  }
  return false;
};

let checkEmail = () => {
  let inputEl = document.querySelector("#mail");
  let inputFeedbackEl = document.querySelector("#reply_mail");
  let regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
  }
  return false;
};

let checkMessage = () => {
  let inputEl = document.querySelector("#msg");
  let inputFeedbackEl = document.querySelector("#reply_message");
  let regExp = /^[a-zA-Z0-9]{10,500}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
  }
  return false;
};

let makeValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
  inputFeedbackEl.classList.add("correct");
  inputFeedbackEl.classList.remove("incorrect");
  successMsg.textContent = "Succesfuly Submitted";
  inputEl.classList.toggle("success_message");
};

let makeInValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
  inputFeedbackEl.classList.remove("correct");
  inputFeedbackEl.classList.add("incorrect");
  errMsg.textContent = "Invalid Format!";
  inputEl.classList.toggle("error_message");
  preventDefault();
};

let validateForm = () => {
  var validUsername = checkUserName();
  var validEmail = checkEmail();
  var validMessage = checkMessage();
  return validUsername && validEmail && validMessage;
};
