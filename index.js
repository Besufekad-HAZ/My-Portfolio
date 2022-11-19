const ham_menu = document.querySelector(".ham_menu");
const mobile_container = document.querySelector(".mobile_menu");
const ham_menu2 = document.querySelector("#links .ham_menu2");
const links = document.querySelector("#links");

ham_menu.addEventListener("click", () => {
    ham_menu.style.display = "none";
  ham_menu.classList.toggle("active");
  links.classList.toggle("active");
    mobile_container.style.display = 'block';
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
