function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.newToDoText('newToDoText');
  const toDoList = document.toDoList('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    let title = newToDoText.value; // get the text
    let newLi = document.createElement("li"); // create a new li
    let checkbox = document.createElement('input') // create a new input then
    checkbox.type = "checkbox"; // set the input type to checkbox
    newLi.textContent = title; // set the title
    newLi.appendChild(checkbox); // attach the checkbox to the li
    toDoList.appendChild(newLi); // attach the li to the ul
    newToDoText.value = ''; // empty the input

  });
}

window.onload = function() {
  alert("Example of an alert");
  onReady();
};
