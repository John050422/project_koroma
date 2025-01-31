// InputDeviceInfo, add button and todo listing div
const inputElement = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const Todolisting = document.getElementById("todo-listing");

addButton.addEventListener("click", (event) => {
  const inputValue = inputElement.value;
  const initialTodolist = Todolisting.innerHTML;
  Todolisting.innerHTML =
    initialTodolist +
    `
    
    <div id = "todo-item">
    <div>
    <p id ="task-title">${inputValue}</p>
    </div>
    <div>
     <button id = "task-tittle">Edit</button>
     <button id = "delete-button">Delete</button>
     </div>
     </div>
    `;
  inputElement.value = "";
});
