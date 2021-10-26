// selectors
const nicknameInput = document.querySelector(".nickname-input");
const linkInput = document.querySelector(".link-input");
const list = document.querySelector(".list-container");
const addButton = document.querySelector(".add");
const colorInput = document.querySelector(".color-input");
const showAddButton = document.querySelector(".show-add-button");


// event listeners
addButton.addEventListener("click", addLink);
showAddButton.addEventListener("click", showInput);

// functions
function addLink(e) {
  e.preventDefault();
  // create divs
  const listDiv = document.createElement("div");
  listDiv.classList.add("link");
  // create link
  const newLink = document.createElement("a");
  newLink.innerText = nicknameInput.value;
  newLink.href = linkInput.value;
  newLink.target = "_blank";
  newLink.style.color = colorInput.value;
  newLink.classList.add("link-item");
  listDiv.appendChild(newLink);
  // button div
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("link-buttons");
  listDiv.appendChild(buttonDiv);
   // color input
   const colorButton = document.createElement("input");
   colorButton.type = "color";
   colorButton.classList.add("link-button");
   buttonDiv.appendChild(colorButton);
  // create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.addEventListener("click" , deleteLink);
  trashButton.classList.add("trash-btn");
  trashButton.classList.add("link-button");
  buttonDiv.appendChild(trashButton);
  //attach everything
  list.appendChild(listDiv);
   // reset inputs
   linkInput.value = "";
   nicknameInput.value = "";
   colorInput.value = "";
}

function deleteLink(e) {
  const item = e.target;
  const link = item.parentElement.parentElement.parentElement; // lol
  link.remove();
};


function showInput() {
  const inputContainer = document.querySelector(".input-container");
  if (inputContainer.style.display === "flex") {
    inputContainer.style.display = "none"
  } else {
    inputContainer.style.display = "flex";
  }
}

