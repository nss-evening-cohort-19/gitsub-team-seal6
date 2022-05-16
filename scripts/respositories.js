const repoData = [
  {
    repoId: 1,
    title: "horror-ipsum-generator",
    description:
      "A horror themed lorum ipsum genrator with spooky inspired words and phrases.",
    favorite: false,
    lastUpdated: "2 days ago",
  },
  {
    repoId: 2,
    title: "how-many-days-til",
    description:
      "A React countdown app of days between today and E-19 Graduation. Woo-hoo!",
    favorite: false,
    lastUpdated: "7 days ago",
  },
  {
    repoId: 3,
    title: "ht-dr-t",
    description: "HTTP status codes as portrayed by Dr. T GIFs 💃🏾",
    favorite: true,
    lastUpdated: "16 days ago",
  },
  {
    repoId: 4,
    title: "people-loving-nashville",
    description:
      "Website for peoplelovingnashville.com, a non-profit founded to help those in need in the Nashville community.",
    favorite: true,
    lastUpdated: "2 months ago",
  },
];

const formInfo = [];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

import navbar from "./navbar.js";
import footer from "./footer.js";


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
    renderToDom('#profile', domString);
  }

const repoCards = (array) => {
  let domString = " ";
  for (const item of array) {
    domString += `
    <div class="card" style="width: 46rem;">
      <div class="card-body">
        <a href="${item.repoId}" h5 class="card-title">${item.title}</a>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-outline-info btn-sm">${
          item.favorite ? "" : ""
        }${item.title}</a>
        <p class="card-text">${item.lastUpdated}</p>
      </div>
    </div>
  `;
  }
  renderToDom("#repo-container", domString);
};

const repoFormInput = () => {
  let domString = `<form class="mb-3" id="form-input">
  <label for="repoName" class="form-label">Repository name</label>
  <input type="text" class="form-control" id="repoName" placeholder="Repo name">
  </div>  <div class="mb-3">
  <label for="repoDescription" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="repoDescription" rows="3"></textarea>
  <button type="submit" class="btn btn-primary mb-3">Create repository</button>
  </div>
  </form>
  `;
  renderToDom("#form-container", domString);
};

// *** EVENT LISTENERS *** //

const eventListener = () => {
  const formAdd = document.getElementById("form-input");
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const addForm = {
      title: document.querySelector("#repoName").value,
      description: document.querySelector("#repoDescription").value,
    };
    repoData.push(addForm);
    repoCards(repoData);
    formAdd.reset();
  });
};

const startApp = () => {
  profile();
  navbar();
  footer();
  repoFormInput();
  repoCards(repoData);
  eventListener();
};
startApp();
