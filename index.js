const ham_menu = document.querySelector(".ham_menu");
const links = document.querySelector("#links");
const sec_nav = document.querySelector("#sec_nav");

ham_menu.addEventListener("click", () => {
  ham_menu.classList.toggle("active");
  links.classList.toggle("active");
  sec_nav.classList.toggle("active");
});

document.querySelectorAll(".nv").forEach((n) =>
  n.addEventListener("click", () => {
    ham_menu.classList.remove("active");
    links.classlist.toggle("active");
    sec_nav.classlist.toggle("active");
  })
);
