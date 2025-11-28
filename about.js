const myModal = document.querySelector("#myModal");

myModal.addEventListener("show.bs.modal", (event) => {
  return event.preventDefault(); // stops modal from being shown
});

const myCollapseEl = document.querySelector("#myCollapse");

myCollapseEl.addEventListener("shown.bs.collapse", (event) => {
  // Action to execute once the collapsible area is expanded
});

const myDefaultAllowList = bootstrap.Tooltip.Default.allowList;

// To allow table elements
myDefaultAllowList.table = [];

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ["data-bs-option"];

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/;
myDefaultAllowList["*"].push(myCustomRegex);
