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

const profiles = [
  {
    imgURL:"../assets/profile-index.jpg",
    name: "Jacob Martin",
    username: "Massacre_Saint",
    bio: "Barista by day, programmer by night",
    location: "Nashville, TN",
    email: "jbm6b@mtmail.mtsu.edu",
    netlify:"https://app.netlify.com/teams/massacre-saint/overview?_ga=2.253120458.296479475.1652535796-1481864206.1650580315",
    social:""
  },
  {
    imgURL:"../assets/profile-repo.png",
    name: "Emily Stroud",
    username: "Massacre",
    bio: "Barista by day, programmer by night",
    location: "Nashville, TN",
    email: "jbm6b@mtmail.mtsu.edu",
    netlify:"https://app.netlify.com/teams/massacre-saint/overview?_ga=2.253120458.296479475.1652535796-1481864206.1650580315",
    social:""
  },
  {
    imgURL:"../assets/profile-projects.jpg",
    name: "Jeremiah King",
    username: "Massacre_Saint",
    bio: "Barista by day, programmer by night",
    location: "Nashville, TN",
    email: "jbm6b@mtmail.mtsu.edu",
    netlify:"https://app.netlify.com/teams/massacre-saint/overview?_ga=2.253120458.296479475.1652535796-1481864206.1650580315",
    social:""
  },
  {
    imgURL:"../assets/profile-pack.jpeg",
    name: "Jessica Morrison",
    username: "Massacre_Saint",
    bio: "Barista by day, programmer by night",
    location: "Nashville, TN",
    email: "jbm6b@mtmail.mtsu.edu",
    netlify:"https://app.netlify.com/teams/massacre-saint/overview?_ga=2.253120458.296479475.1652535796-1481864206.1650580315",
    social:""
  }

]
// Packages Data
const packages = [
  {
    appName: "Docker",
    description:"lorem ipsum",
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

let newProjectName = [];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// DOM Cards

const navbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../pages/index.html">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/repositories.html">Repositories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/projects.html">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/packages.html">Packages</a>
        </li>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  `;
  renderToDom("#navbar", domString);
};

const profile = (profiles) => {
  let domString = ""
  for (let profile of profiles) {
    domString += `
  <div class="card" style="width: 18rem;">
    <img src="${profile.imgURL}" alt="...">
    <div>
      <h5>${profile.name}</h5>
      <p>${profile.username}</p>
      <p>${[profile.bio]}</p>
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
        <a>${profile.location}</a>
      </li>
      <li>
        <i class="fa-regular fa-envelope"></i>
        <a>${profile.email}</a>
      </li>
      <li>
        <i class="fa-solid fa-link"></i>
        <a href= "${profile.netlify}">Netlify Projects</a>
      </li>
      <li>
        <i class="fa-brands fa-twitter"></i>
        <a>${profile.social}</a>
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
  }
  const profileOver = profiles[0];
  const profileRepo = profiles[1];
  const profileProjects = profiles[2];
  const profilePackages = profiles[3];
  if (profileOver) {
    renderToDom("#profile", domString);
  } else if (profileRepo) {
    renderToDom("#profile-repo", domString);
  } else if (profileProjects == document.getElementById('profile-projects')) {
    renderToDom("#profile-projects", domString);
  } else if (profilePackages == document.getElementById('profile-packages')) {
    renderToDom("#profile-packages", domString);
  }
}

// const footer = () => {
//   const domString = `
//   <div class="footer">
//     <a href="#" class="link">A Link</a>
//   </div>
//   `;
//   renderToDom('#footer', domString);
// };
const formInput = () => {
  let domString = `<form class="row g-3">
<div class="col-auto">
  <label for="fullName" class="visually-hidden">Full Name: </label>
  <input type="name" class="form-control" id="fullName" placeholder="Full Name">
</div>
<div class="col-auto">
  <button type="submit" class="btn btn-primary mb-3">Sort to House</button>
</div>
</form>
`;
  renderToDom("#form", domString);
};

// Packages Card 

const packagesCard = (packages)=> {
  let domString =" "
  for (let package of packages){
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><i class="bi bi-box-seam"></i> ${package.appName}</h5>
    <p class="card-text">${package.description}.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>`
  };
renderToDom("#packages-container",domString)
}








// Event Listeners

// Call the Functions
const startApp = () => {
  profile(profiles);
  navbar();
  packagesCard(packages);
  formInput();
};
startApp();
