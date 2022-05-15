const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// DOM Cards

import navbar from "./navbar.js";


import footer from "./footer.js";

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

// const footer = () => {
//   const domString = `
//   <div class="footer">
//     <a href="#" class="link">A Link</a>
//   </div>
//   `;
//   renderToDom('#footer', domString);
// };

//Packages Card

// Event Listeners

// Call the Functions
const startApp = () => {
  profile();
  navbar();
};
startApp();
