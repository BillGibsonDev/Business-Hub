// selectors
const nickmaneInput = document.querySelector(".nickname-input");
const linkInput = document.querySelector(".link-input");
const list = document.querySelector(".list-container");
const addButton = document.querySelector(".add");

// event listeners
addButton.addEventListener("click", addLink);


// functions
function addLink(e) {
    e.preventDefault();
    //Create div
    const listDiv = document.createElement("div");
    listDiv.classList.add("link");
    //Create link
    const newLink = document.createElement("a");
    newLink.innerText = nickmaneInput.value;
    newLink.href = linkInput.value;
    newLink.target = "_blank";
    //attach final
    newLink.classList.add("link-item");
    listDiv.appendChild(newLink);
    linkInput.value = "";
    list.appendChild(listDiv);
  }
