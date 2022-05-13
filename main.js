const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

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
          <a class="nav-link active" aria-current="page" href="../index.html">Overview</a>
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
    <img src="..." class="card-img-top" alt="...">
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

// const footer = () => {
//   const domString = `
//   <div class="footer">
//     <a href="#" class="link">A Link</a>
//   </div>
//   `;
//   renderToDom('#footer', domString);
// };

const startApp = () => {
  profile();
  navbar();
};
startApp();
