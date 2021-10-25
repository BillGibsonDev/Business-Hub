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
  // create div
  const listDiv = document.createElement("div");
  listDiv.classList.add("link");
  // create link
  const newLink = document.createElement("a");
  newLink.innerText = nicknameInput.value;
  newLink.href = linkInput.value;
  newLink.target = "_blank";
  newLink.style.color = colorInput.value;
  // 
  newLink.classList.add("link-item");
  listDiv.appendChild(newLink);
  // reset inputs
  linkInput.value = "";
  nicknameInput.value = "";
  colorInput.value = "";
  // create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.addEventListener("click" , deleteLink);
  trashButton.classList.add("trash-btn");
  trashButton.classList.add("link-button");
  listDiv.appendChild(trashButton);
  // color input
  const colorButton = document.createElement("input");
  colorButton.type = "color";
  colorButton.classList.add("link-button");
  listDiv.appendChild(colorButton);
  //attach everything
  list.appendChild(listDiv);
}

function deleteLink(e) {
  const item = e.target;
  const link = item.parentElement.parentElement; // lol
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

