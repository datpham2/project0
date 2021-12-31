const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  // Find me the button with a class of button
  const button = document.querySelector('.button');

  // Create a form element
  const form = document.createElement('form');

  // Create a class for the form
  form.className = 'task_editor center';

  // Create an input fill inside of form using innerHTML property
  form.innerHTML = '<textarea id="task" cols="50" name="task" placeholder="New Task" rows="4"></textarea><br><input disabled id="submit" type="submit" value="Add task">';

  // Find me the parent of an existing child
  const container = document.querySelector('.container');

  // Insert the form as a child, right before an existing child
  container.insertBefore(form, button);

  // Hide the New TODO button
  button.style.display = 'none';

  // Add event listener if the user left the finger up from the key
  const taskInput = document.querySelector('#task');
  const addTaskButton = document.querySelector('#submit')
  taskInput.onkeyup = () => {

    // Enatble the Add Task button when the user really typed in
    if (taskInput.value.length > 0) {
      addTaskButton.disabled = false;
    } else {
      addTaskButton.disabled = true;
    }
  }

  // Listen to the form to be submitted
  const taskEditor = document.querySelector('.task_editor');
  taskEditor.onsubmit = () => {
    
    // Create an li element
    const li = document.createElement('li');
    
    // Take whatever the user typed in and set it to inner HTML property of li and add a checkbox before it
    li.innerHTML = `<input name="checkboxes" type="checkbox" value="${taskInput.value}">${taskInput.value}`;

    // Append the li element to the end of todo list
    const todoList = document.querySelector('#todo-list');
    todoList.append(li);

    // Update the Item count by 1
    const itemCount = document.querySelector('#item-count')
    let itemCounter = parseInt(itemCount.innerHTML);
    itemCounter++;
    itemCount.innerHTML = itemCounter;

    // Hide the form
    form.remove();

    // Show the New TODO button
    button.style.display = 'block';

    // Prevent the form from being submitted
    return false;
  }
}
