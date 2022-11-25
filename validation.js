document.getElementById("form_all").addEventListener("submit", (ev) => {
  const emailValue = document.getElementById("mail").value;
  const emailError = document.getElementById("error_message");
  const validate = emailValue.toLowerCase();
  const form = document.getElementByclass("form_all");
  if (emailValue === validate) {
    emailError.textContent = "";
    form.submit();
  } else {
    ev.preventDefault();
    emailError.textContent = "Please write your email in lower case!";
  }
});
