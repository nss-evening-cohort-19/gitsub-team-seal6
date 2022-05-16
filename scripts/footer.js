const footer = () => {
  const domString = `
  <footer>
    <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a>
    <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a>
    <a href="https://github.com/security">Security</a>
    <a href="https://www.githubstatus.com/">Status</a>
    <a href="https://docs.github.com/en">Help</a>
    <a href="https://support.github.com/?tags=dotcom-footer">Contact Github</a>
    <a href="https://github.com/pricing">Pricing</a>
    <a href="https://docs.github.com/en">API</a>
    <a href="https://services.github.com">Training</a>
    <a href="https://github.blog">Blog</a>
    <a href="https://github.com/about">About</a>
  </footer>
 `;
 renderToDom("#footer", domString);
};


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

export default footer;
