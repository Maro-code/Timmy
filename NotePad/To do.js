const currentDate = new Date();

function updateDate() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString() + " " + now.toLocaleTimeString();
  document.getElementById("date").innerHTML = formattedDate;
}
setInterval(updateDate, 1000);
updateDate();

let status = document.querySelectorAll("input[type='checkbox']");

status.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    let label = this.parentNode; 
    if (this.checked) {
      label.style.textDecoration = "line-through"; 
    } else {
      label.style.textDecoration = "none"; 
    }
  });
});

function additem() {
  let ul = document.getElementById("myList");
  let task = document.getElementById("newTask");
  
  if (task.value !== "") {
    // Create a new list item
    let li = document.createElement("li");
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute('id', 'task');
    let taskName = document.createElement("p");
    taskName.appendChild(document.createTextNode(task.value));
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        taskDiv.style.textDecoration = "line-through";
        taskDiv.style.color= "#4d4d4d";
      } else {
        taskDiv.style.textDecoration = "none";
        taskDiv.style.color= "#000000";
      }
    });
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(checkbox);
    li.appendChild(taskDiv);
    ul.appendChild(li);
    task.value = ""; 
  }
}

function removeItem() {
  let ul = document.getElementById("myList");
  let targets = document.querySelectorAll("input[type='checkbox']");
  targets.forEach(target => {
    if (target.checked) {
      ul.removeChild(target.parentElement.parentElement);
    }
  });
}
