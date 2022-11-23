const ham_menu = document.querySelector(".ham_menu");
const mobile_container = document.querySelector(".mobile_menu");
const ham_menu2 = document.querySelector("#links .ham_menu2");
const links = document.querySelector("#links");
// const new_bg = document.querySelector("#link_top");

ham_menu.addEventListener("click", () => {
  ham_menu.style.display = "none";
  ham_menu.classList.toggle("active");
  links.classList.toggle("active");
  mobile_container.style.display = "block";
});

document.querySelectorAll(".nv").forEach((n) =>
  n.addEventListener("click", () => {
    ham_menu.classList.remove("active");
    ham_menu.style.display = "block";
    links.classList.toggle("active");
  })
);

ham_menu2.addEventListener("click", () => {
  ham_menu.style.display = "block";
  // links.style.display = "none";
  ham_menu.classList.remove("active");
  links.classList.toggle("active");
});

// validation

// function validation() {
//   const form = document.getElementById("form_all");
//   const name = form.elements.name.value;
//   const email = form.elements.mail.value;
//   const message = form.elements.msg.value;
//   const msg_info = document.getElementById("error_message");
//   msg_info.innerHTML = "";

//   form.addEventListener("submit", (event) => {
//      if ((email) !== email.toLowerCase()) {
//        event.preventDefault();
//        msg_info.innerHTML = "Please write your email in lower case!";
//      }
//     //   else if (message.length < 5) {
//     //    event.preventDefault();
//     //    msg_info.innerHTML = "*Please write a message";
//     //  }

//     //  else if (name.length == 0) {
//     //    event.preventDefault();
//     //    msg_info.innerHTML = "Please write your name";
//     else {
//        form.submit();
//     }
//   });
// }

// validation();
