const projects = [
  {
    id: 1,
    projectName: "project-example",
    projDescription: "Sorting Hat",
  },
  {
    id: 2,
    projectName: "Example1",
    projDescription: "Word Sort",
  },
  {
    id: 3,
    projectName: "my-goals",
    projDescription: "My Resume",
  },
  {
    id: 4,
    projectName: "Sample My Goals",
    projDescription: "No description",
  },
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const formInfo = [];

const projectsId = () => {
  projects.forEach((indProj, index) => {
    return (indProj.id = index + 1);
  });
};

import footer from "./footer.js";
import navbar from "./navbar.js";

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

const projectsCard = (projects) => {
  let domString = "";
  for (const indProj of projects) {
    domString += `
    <div id = "projectbox" class= "mt-3"> 
    <div class="Box-row clearfix position-relative pr-6"> 
    <div class="container px-4">   
    <div class="row gx-5">
      <div class="col">
       <div class="p-3 bg-transparent">${indProj.projectName}</div>
      </div>
      <div class="col">
        <div class="p-3 bg-transparent">${indProj.projDescription}</div>
      </div>
      <div class="col">
        <div class="p-3 bg-transparent">...</div>
      </div>
      </div>
    </div>
    </div>
  </div>`;
  }
  renderToDom("#projects-container", domString);
};

const formInputs = () => {
  let domString = `<form class="mb-3" id="form-inputs">
  <label for="projectName" class="form-label">Project board name</label>
  <input type="text" class="form-control" id="projectName" placeholder="Project name">
  </div>
  <div class="mb-3">
  <label for="projectDescription" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="projDescription" rows="3"></textarea>
  <button type="submit" class="btn btn-primary mb-3">Create project</button>
  </div>
  </form>
  `;
  renderToDom("#forms-container", domString);
};

const eventListeners = () => {
  const form = document.getElementById("form-inputs");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const addProject = {
      projectName: document.querySelector("#projectName").value,
      projDescription: document.querySelector("#projDescription").value,
    };
    projects.push(addProject);
    projectsCard(projects);
    form.reset();
  });
};

const resetForm = () => {
  console.log("Reset form");
};

const startApp = () => {
  profile();
  navbar();
  footer();
  projectsCard(projects);
  projectsId(projects);
  formInputs();
  eventListeners();
  resetForm();
};
startApp();
