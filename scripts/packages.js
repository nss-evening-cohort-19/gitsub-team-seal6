import footer from "./footer.js";
import navbar from "./navbar.js";
import footer from "./footer.js";

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
  const formAdd = document.getElementById("form-container");
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const addForm = {
      appName: document.querySelector("#packageName").value,
      description: document.querySelector("#description").value,
    };
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
  });
};

const startApp = () => {
  profile();
  navbar();
  footer();
  packagesCard(packages);
  formInput();
  eventListener();
};
startApp();
