const projects = [
  {
    id: 1,
    projectName: "project-example",
    description: "Sorting Hat",
  },
  {
    id: 2,
    projectName: "Example1",
    description: "Word Sort",
  },
  {
    id: 3,
    projectName: "my-goals",
    description: "My Resume",
  },
  {
    id: 4,
    projectName: "Sample My Goals",
    description: "No description",
  },
];

let newProjectName = [];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const projectsId = () => {
  projects.forEach((indProj, index) => {
    return (indProj.id = index + 1);
  });
};

import navbar from "./navbar.js";

const profile = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <img src="/pages/user.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  `;
  renderToDom("#profile", domString);
};

const projectsCard = (projects) => {
  let domString = "";
  for (const indProj of projects) {
    domString += `
  <div class="domCard1" text-center">
  <div class="card-body">
  <p class="projectName">${indProj.projectName} </p>
  <p class="projDescription">${indProj.projDescription}</p>
  <hr>
  </div>
  </div>`;
  }
  renderToDom("#projects-container", domString);
};

const formInput = () => {
  let domString = `<form class="mb-3">
  <label for="projectName" class="form-label">Project board name</label>
  <input type="text" class="form-control" id="projectName" placeholder="Project name">
  </div>
  <div class="mb-3">
  <label for="projectDescription" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="projectDescription" rows="3"></textarea>
  <button type="submit" class="btn btn-primary mb-3">Create project</button>
  </div>
  </form>
  `;
  renderToDom("#form-container", domString);
};

const newProject = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newProjectObj = {
      id: projects.length + 1,
      name: document.querySelector("#formProjectName").value,
      description: document.querySelector("#projectDescription").value,
    };
    projects.push(newProjectObj);
    projOnDom(projects);
    formInput.reset();
  });
};

const startApp = () => {
  profile();
  navbar();
  projectsCard(projects);
  projectsId(projects);
  newProject();
  formInput();
};
startApp();
