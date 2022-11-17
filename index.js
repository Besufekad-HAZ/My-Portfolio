const ham_menu = document.querySelector(".ham_menu");
const links = document.querySelector("#links");

ham_menu.addEventListener("click", () => {
  ham_menu.classList.toggle("active");
  links.classList.toggle("active");
});

document.querySelectorAll(".nv").forEach((n) =>
  n.addEventListener("click", () => {
    ham_menu.classList.remove("active");
    links.classList.toggle("active");
  })
);
