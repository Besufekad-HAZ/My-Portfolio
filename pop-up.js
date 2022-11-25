// const closeBtn = document.querySelector(".close-btn");
// const modal = document.querySelector(".modal-pop");
// const projBtn = document.querySelector(".proj_view_btn");

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// projBtn.addEventListener("click", () => {
//   modal.style.display = "block";
// });

//second section Declaration Start here
"use strict";
const work1 = {
  name: "Project 1",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 1.png",
};

const work2 = {
  name: "Project 2",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 2.png",
};

const work3 = {
  name: "Project 3",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 3.png",
};

const work4 = {
  name: "Project 4",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 4.png",
};

const work5 = {
  name: "Project 5",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 5.png",
};

const work6 = {
  name: "Project 6",
  languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
  link: [
    "https://github.com/Besufekad-HAZ/",
    "https://besufekad-haz.github.io/My-Portfolio/",
  ],
  image: "img/Work 6.png",
};

// accessing the projects
const projects = [work1, work2, work3, work4, work5, work6];

function modal(number) {
  const card = document.querySelector("#work");
  card.classList.toggle("hidden");
  const name = document.querySelector("#work_name");
  const list = document.querySelector(".lang-list");
  list.innerHTML = "";
  const img = document.querySelector(".work-img");
  const desc = document.querySelector(".mod-desc");
  const src_btn = document.querySelector(".source");
  const live_btn = document.querySelector(".live");

  name.innerHTML = projects[number].name;

  for (let i = 0; i < projects[number].languages.length; i++) {
    const li = document.createElement("li");
    li.textContent = projects[number].languages[i];
    list.appendChild(li);
  }

  img.setAttribute("src", projects[number].image);
  src_btn.setAttribute(
    "onclick",
    `window.open("${projects[number].link[1]}", "_blank");`
  );
  live_btn.setAttribute(
    "onclick",
    `window.open("${projects[number].link[0]}", "_blank");`
  );
  desc.innerHTML = projects[number].description;
}

function toggle() {
  const card = document.querySelector("#work");
  card.classList.toggle("hidden");
}

toggle();
modal();
