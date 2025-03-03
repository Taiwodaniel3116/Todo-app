const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoOutput = document.querySelector('.todo-output');
const todoOutputWrapper = document.querySelector('.todo-output-wrapper');
const calendar = document.querySelector('.calendar');

/* ADD TASK */
function addTask() {
  if (todoInput.value === '') {
    alert('Add a Task in the input area!');
  } else {
    const outputTag = document.createElement('li');
    outputTag.innerHTML = todoInput.value;
    outputTag.classList.add('output-tag');

  //  const calendarOutput = document.createElement('li');
  //   calendarOutput.innerHTML = `(${calendar.value})`;
  //   calendarOutput.classList.add('calendar');

    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete Task💥';
    delBtn.classList.add('del-btn');

    todoOutputWrapper.appendChild(outputTag);
    // outputTag.appendChild(calendarOutput);
    outputTag.appendChild(delBtn);

    todoInput.value = '';

    saveData();
  } 
}

/* ADD BUTTON FUNCTIONALITY USING ONCLICK*/
addTodoBtn.addEventListener('click', () => {
  addTask();
})
/* ADD BUTTON FUNCTIONALITY USING KEYDOWN*/
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
})

/* DELETE BUTTON FUNCTIONALITY*/
todoOutputWrapper.addEventListener('click', (element) => {
  if (element.target.tagName === 'BUTTON') {
    element.target.parentElement.remove();
 
    // todoOutputWrapper.innerHTML = ''
    saveData();
  }
   else if(element.target.tagName === 'LI') {
    element.target.classList.toggle('checked');

    saveData();
  }
})

function saveData() {
  localStorage.setItem('data', todoOutputWrapper.innerHTML);
}
function getData() {
  todoOutputWrapper.innerHTML = localStorage.getItem('data');
}
  getData();