const repoData = [
  {
    repoId: 1,
    title: "horror-ipsum-generator",
    description: "A horror themed lorum ipsum genrator with spooky inspired words and phrases.",
    favorite: false,
    lastUpdated: "2 days ago",
  },
  {
    repoId: 2,
    title: "how-many-days-til",
    description: "A React countdown app of days between today and E-19 Graduation. Woo-hoo!",
    favorite: false,
    lastUpdated: "7 days ago"
  },
  {
    repoId: 3,
    title: "ht-dr-t",
    description: "HTTP status codes as portrayed by Dr. T GIFs 💃🏾",
    favorite: true,
    lastUpdated: "16 days ago"
  },
  {
    repoId: 4,
    title: "people-loving-nashville",
    description: "Website for peoplelovingnashville.com, a non-profit founded to help those in need in the Nashville community.",
    favorite: true,
    lastUpdated: "2 months ago"
  },
];

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

// *** Repo Cards *** //

const repoCards = (array) => {
  let domString = " ";
  for (const item of array) {
    domString += `
    <div class="card" style="width: 46rem;">
      <div class="card-body">
        <a href="${item.repoId}" h5 class="card-title">${item.title}</a>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-outline-info btn-sm">${item.favorite ? "" : ""}${item.title}</a>
        <p class="card-text">${item.lastUpdated}</p>
      </div>
    </div>
  `;
  }
  renderToDom("#repo-container", domString);
};


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
  profile();
  navbar();
  repoCards(repoData);
  packagesCard(packages);
  formInput();
};
startApp();
