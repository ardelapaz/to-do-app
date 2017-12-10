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
  });
}

window.onload = function() {
  alert("Example of an alert");
  onReady();
};
