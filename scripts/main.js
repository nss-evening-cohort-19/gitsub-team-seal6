import navbar from "./navbar.js";
import footer from "./footer.js";
const languages = ["Javascript", "HTML", "CSS"];
const pinRepos = [
  {
    id: 1,
    name: "Sorting-hat",
    desciption: "Created an app based on the Harry Potter sorting hat.",
    type: "Javascript",
    star: 1,
    branches: 8,
  },
  {
    id: 2,
    name: "Word-counter",
    desciption:
      "Created an app that counted the number of an input field and displayed onto the DOM.",
    type: "Javascript",
    star: 2,
    branches: 4,
  },

  {
    id: 3,
    name: "Link-bio",
    desciption:
      "Created a page that can be used as a modul for displaying contact and social info.",
    type: "Javascript",
    star: 6,
    branches: 2,
  },

  {
    id: 4,
    name: "HTML-resume",
    desciption:
      "Created an splash page that showed my current resume on the DOM.",
    type: "Javascript",
    star: 3,
    branches: 1,
  },

  {
    id: 5,
    name: "Test30",
    desciption: "Final test on the create 30 repos assigment.MILESTONE.",
    type: "Javascript",
    star: 1,
    branches: 2,
  },

  {
    id: 6,
    name: "Product-cards",
    desciption:
      "Created a DOM page that could be used for retail purposes when displaying multiple products.",
    type: "Javascript",
    star: 10,
    branches: 3,
  },
];
// const langColor = () => {
//   const dot = document.querySelector(".color-change");
//   if (pinRepos.type === "Javascript")
//     return (dot.style.backgroundColor = "#0d1117");
// };
//   const color = pinRepos.find(getLanguage);
//   const dot = document.querySelector(".lang-dot");
//   function getLanguage(value, index, array) {
//     if (value === "Javascript") {
//       return (yellow = dot.body.style.backgroundColor = "yellow");
//     } else if (value === "HTML") {
//       return (orange = dot.body.style.backgroundColor = "orange");
//     } else if (value === "CSS") {
//       return (blue = dot.body.style.backgroundColor = "blue");
//     }
//   }
// };
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
const getRandomNum = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
// DOM Cards
const profile = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <img src="../assets/profile-index.jpg" alt="...">
    <div>
      <h5>Jacob Martin</h5>
      <p>Massacre_Saint</p>
      <p>Barista by day, programmer by night</p>
      <button type="button" class="btn btn-secondary btn-sm">Follow</button>
      <button type="button" class="btn btn-secondary btn-sm">Sponsor</button>
      <button type="button" class="btn btn-secondary btn-sm">...</button>
      <div>
        <div>
          <a>
            <i class="fa-solid fa-user-group"></i>
            <span>1 follower</span> 
          </a>
           . 
          <a>
            <span>0 following</span>
          </a>
        </div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li>
      <i class="fa-solid fa-location-dot"></i>
        <a>Nashville, TN</a>
      </li>
      <li>
        <i class="fa-regular fa-envelope"></i>
        <a>jbm6b@mtmail.mtsu.edu</a>
      </li>
      <li>
        <i class="fa-solid fa-link"></i>
        <a href= "https://app.netlify.com/teams/massacre-saint/overview?_ga=2.253120458.296479475.1652535796-1481864206.1650580315">Netlify Projects</a>
      </li>
      <li>
        <i class="fa-brands fa-twitter"></i>
        <a></a>
      </li>
    </ul>
    <ul class="list-group list-group-flush">
      <li>
        <span>Highlights</span>
      </li>
      <li>
        <i class="fa-solid fa-award"></i>
        <span>An item</span>
      </li>
      <li>
        <i class="fa-solid fa-6"></i>
        <span>A part of Team Seal 6</span>
      </li>
      <li>
        <i class="fa-brands fa-hotjar"></i>
        <span>Dr.T's sexy cohort!</span>
      </li>
    </ul>
  </div>
  `;
  renderToDom("#profile", domString);
};

const repoCard = () => {
  let domString = " ";
  for (let repo of pinRepos) {
    domString += `
    <div class="repo-card">
      <div>
        <a>
          <span>
            <i class="fa-solid fa-inbox"></i>
            ${repo.name}
          </span>
        </a>
      </div>
      <div>
          <p class="color-change">${repo.desciption}</p>
      </div>
      <div class="repo-details">
        <div>
          <span class= "lang-dot">${repo.type}</span>
        </div>
        <div>
          <span>
          <i class="fa-regular fa-star"></i>
          ${repo.star}
          </span>
        </div>
        <div>
          <span>
            <i class="fa-solid fa-code-branch"></i>
            ${repo.branches}
          </span>
        </div>
      </div>
    </div>
  `;
  }
  renderToDom("#container", domString);
};

const formInput = () => {
  let domString = `<form class="mb-3">
  <label for="name" class="form-label">Pinned Repositories</label>
  <input type="text" class="form-control" id="name" placeholder="Repo name">
  </div>
  <div class="mb-3">
  <label for="description" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="description" rows="3"></textarea>
  <button type="submit" class="btn btn-primary mb-3">Create repo</button>
  </div>
  </form>
  `;
  renderToDom("#form", domString);
};

// Event Listeners
const eventListeners = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepoObj = {
      name: document.querySelector("#name").value,
      desciption: document.querySelector("#description").value,
      type: languages[Math.floor(Math.random() * 3)],
      star: getRandomNum(10),
      branches: getRandomNum(12),
    };
    pinRepos.push(newRepoObj);
    repoCard(pinRepos);
    form.reset();
  });
};
// Call the Functions
const startApp = () => {
  profile();
  navbar();
  repoCard(pinRepos);
  formInput();
  footer();
  eventListeners();
};
startApp();
