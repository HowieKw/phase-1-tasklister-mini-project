const priorityColors = {high: "red", medium: "orange", low: "green"};

document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector("#create-task-form");
    form.addEventListener("submit",e => {
      e.preventDefault();
      addTask();
      form.reset();
    })
  });


  function addTask() {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    let newTask = document.querySelector("#new-task-description");
    let prioritySelectionField = document.querySelector("#prioritySelection")
    li.textContent = newTask.value;
    li.style.color = priorityColors[prioritySelectionField.value];
    delBtn.textContent = "done";
    delBtn.addEventListener("click", handleDelete);
    li.appendChild(space);
    li.appendChild(delBtn);
    document.getElementById("tasks").appendChild(li);
  }

  let space = document.createTextNode(" ");
  function handleDelete(e) {
    e.target.parentNode.remove();
  }
 
  function dropDown() {
    document.getElementById("myDropDown").classList.toggle("show");
  }