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
const projects = [
  {
    name: "Project 1",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 1.png",
  },

  {
    name: "Project 2",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 2.png",
  },
  {
    name: "Project 3",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 3.png",
  },
  {
    name: "Project 4",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 4.png",
  },
  {
    name: "Project 5",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 5.png",
  },
  {
    name: "Project 6",
    languages: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus iusto optio non asperiores? Explicabo itaque voluptate, mollitia sequi, delectus nostrum architecto odio exercitationem eius quis quo quam eveniet! Voluptates necessitatibus delectus illo ullam blanditiis.",
    link_live: "https://besufekad-haz.github.io/My-Portfolio/",
    link_source: "https://github.com/Besufekad-HAZ/",
    image: "Work 6.png",
  },
];

// accessing the projects

// function modal(number) {
  const proj_contain = document.querySelectorAll(".project_list");
  const card = document.querySelector("#work");
//   card.classList.toggle("hidden");
  const Name = document.querySelector("#work_name");
  const Languages = document.querySelector(".lang-list");
  proj_contain.innerHTML = "";
  const img = document.querySelector(".work-img");
  const desc = document.querySelector(".mod-desc");
  const live_btn = document.querySelector(".live");
  const src_btn = document.querySelector(".source");

  for (let i = 0; i < projects.length; i++) {
  var lang = ''
  projects[i].languages.forEach((tech) => {
    lang += `
        <li>${tech}</li>
      `
  })

  
 proj_contain[i].innerHTML = `
              <img src='img/${projects[i].image}' alt='Project Image' class='proj_1st_image' id='img${i}' />
            <div class='proj_list_container'>
              <h4 class='proj_name'>${projects[i].name}</h4>
                <ul class='lang_list'>
                  ${lang}
                </ul>
                <button class="proj_view_btn modal-${i}" type="button">See this Project 
                <i class="fa fa-arrow-right"></i>
                </button>           
                 </div> `
}

for (let i = 0; projects.length; i++) {
   let chkmodal = document.querySelector(`.modal-${i}`);
   chkmodal.addEventListener("click", () => {
     let pop_tech = "";
     projects[i].languages.forEach((tech) => {
       pop_tech += `
       <li>${tech}</li>`;
     });
     document.querySelector("main").style.display = "none";
     document.querySelector("header").style.display = "none";
     Name.innerHTML = projects[i].name;
     Languages.innerHTML = pop_tech;
     img.src = "img/" + projects[i].image;
     desc.innerHTML = projects[i].description;
     live_btn.setAttribute("href", projects[i].link_live);
     src_btn.setAttribute("href", projects[i].link_source);
     card.style.display = "block";
   });
}

function toggle() {
  const card = document.querySelector("#work");
  card.classList.toggle("hidden");
}

// toggle();
