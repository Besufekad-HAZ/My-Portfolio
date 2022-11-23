const str_Form = document.querySelector(".form_collab");
str_Form.addEventListener("input", () => {
  const info = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#mail").value,
    message: document.querySelector("#msg").value,
  };

  localStorage.setItem("str_Form", JSON.stringify(info));
});

const formObj = JSON.parse(localStorage.getItem("str_Form"));
document.querySelector("#name").value = formObj.name;
document.querySelector("#mail").value = formObj.email;
document.querySelector("#msg").value = formObj.message;
