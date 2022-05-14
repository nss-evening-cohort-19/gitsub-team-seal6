import navbar from "./navbar.js";

const packages = [
  {
    appName: "Docker",
    description: "lorem ipsum",
  },
  {
    appName: "Ruby",
    description: "lorem ipsum",
  },
  {
    appName: "Apache",
    description: "lorem ipsum",
  },
  {
    appName: "npm",
    description: "lorem ipsum",
  },
  {
    appName: "NuGet",
    description: "lorem ipsum",
  },
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const formInfo=[]

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

const packagesCard = (packages) => {
  let domString = " ";
  for (let pkg of packages) {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><i class="bi bi-box-seam"></i> ${pkg.appName}</h5>
    <p class="card-text">${pkg.description}.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>`;
  }
  renderToDom("#packages-container", domString);
};

// Form Card 
const formInput = () => {
  let domString = `
  
  <form>
  <label for="projectName" class="form-label">Packages name</label>
  <input type="text" class="form-control" id="packageName" placeholder="Package name">
  </div>
  <div class="mb-3">
  <label for="projectDescription" id="description" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="projectDescription" rows="3"></textarea>
  <button type="submit" class="btn btn-primary mb-3">Create package</button>
  </div>
  </form>
  
  `;
  renderToDom("#form-container", domString);
};

// Event Listener 

const eventListener = () => {
  const formAdd = document.getElementById("form-container")
  formAdd.addEventListener("submit",(e)=>{
  e.preventDefault();
const addForm={
  appName: document.querySelector("#packageName").value,
  description: document.querySelector("#description").value
}
packages.push(addForm);
packagesCard(packages);
formInput.reset();
// const formAdd = document.querySelector("form")
// formAdd.addEventListener("submit",(e)=>{
//   if (e.target.id.includes('submit')) {
//     formInfo.push(...packages.splice(1))
    
//   }
//   packagesCard(packages)
//   formAdd.reset();
})
}

const startApp = () => {
  profile();
  navbar();
  packagesCard(packages);
  formInput();
  eventListener();
};
startApp();
