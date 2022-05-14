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

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
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

const startApp = () => {
  profile();
  navbar();
  repoCards(repoData);
};
startApp();
