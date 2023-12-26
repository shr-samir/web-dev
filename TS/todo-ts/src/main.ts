import 'normalize.css';
import './assets/style.css';

import { Task } from './Task';
import { TaskList } from './TaskItem';

const searchInput = document.querySelector<HTMLInputElement>('#search');

const form = document.querySelector<HTMLFormElement>('#addTask');
const input = document.querySelector<HTMLInputElement>('#newTask');
const listItem = document.querySelector<HTMLUListElement>('#taskList');

const taskList = new TaskList();

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input || input.value === '' || input.value === null) return;

  createTask(input.value);
  renderList(taskList);

  // allTasks.push(newTaskItem);

  // addTaskItem(newTaskItem);
  input.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('taskList') || '[]');
  savedTasks.forEach((taskData: Task) => {
    const task = new Task(taskData.text, taskData.completed);
    taskList.addTask(task);
  });
  renderList(taskList);
});

function createTask(text: string): Task {
  const task = new Task(text);

  taskList.addTask(task);

  localStorage.setItem('taskList', JSON.stringify(taskList.list));
  return task;
}

function toggleTaskCompleted(id: string): Task {
  const task = taskList.getTaskById(id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  if (task) {
    task.toggleCompleted();
    localStorage.setItem('taskList', JSON.stringify(taskList.list));
  }

  return task;
}

// createTask('Learn some new language');
// createTask('Learn how to learn a new language');
// createTask('Fail at learning a new language');

function search(list: TaskList, searchTerm: string = ''): TaskList {
  const tasks = list.list.filter((item) => {
    return item.text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return new TaskList(tasks);
}

function renderList(tasks: TaskList) {
  // const listItem = document.getElementById('taskList');
  if (!listItem) throw new Error('DOM element not found');

  listItem.innerHTML = '';

  tasks.list.forEach((task) => {
    const element = document.createElement('div');
    const label = document.createElement('label');
    const inputField = document.createElement('input');
    const taskValue = document.createElement('span');
    const deleteIcon = document.createElement('div');

    element.classList.add('task-item');

    label.classList.add('form-control');

    inputField.setAttribute('type', 'checkbox');
    inputField.checked = task.completed;

    inputField.addEventListener('change', () => {
      toggleTaskCompleted(task.id);
    });

    // ------- task item text --------
    taskValue.classList.add('task-item-value');
    taskValue.textContent = task.text;

    // ------- delete btn --------

    deleteIcon.classList.add('delete');
    deleteIcon.innerHTML = `<i class="fas fa-trash" ></i>`;

    deleteIcon.addEventListener('click', () => {
      deleteTask(task.id);
    });
    // ------- append ----------
    element.appendChild(label);
    label.appendChild(inputField);
    label.appendChild(taskValue);
    element.appendChild(deleteIcon);

    listItem.appendChild(element);
  });
}

searchInput?.addEventListener('input', (e) => {
  const searchParam = (e.target as HTMLInputElement)?.value;

  render(searchParam);
});

function render(searchParam: string = '') {
  const filteredTaskList = search(taskList, searchParam);

  renderList(filteredTaskList);
}

render();

function deleteTask(id: string) {
  taskList.removeFromList(id);
  render();
}

// function taskModify(event) {
//   const clickedEle = event.target;
//   console.log(clickedEle);
//   // check if the delete button was clicked
//   if (clickedEle.classList.contains('fa-trash')) {
//     const task = clickedEle.parentElement.parentElement;
//     task.remove();
//   }
// }

// taskList.addEventListener('click', taskModify);

// const allTasks: Task[] = loadTasks();
// allTasks.forEach(addTaskItem);

// form?.addEventListener('submit', (e) => {
//   e.preventDefault();

//   if (!input || input.value === '' || input.value === null) return;

//   const newTaskItem: Task = new Task(input.value);

//   allTasks.push(newTaskItem);

//   addTaskItem(newTaskItem);
//   input.value = '';
// });

// function addTaskItem(task: Task) {
//   const taskItem = document.createElement('li');
//   const label = document.createElement('label');
//   const checkbox = document.createElement('input');
//   checkbox.addEventListener('change', () => {
//     task.completed = checkbox.checked;
//     saveTasks();
//   });
//   saveTasks();

//   checkbox.type = 'checkbox';
//   checkbox.checked = task.completed;
//   label.append(checkbox, task.text);
//   taskItem.append(label);
//   list?.append(taskItem);
// }

// function render(searchParam: string = '') {
//   const filteredTaskList = search(allTasks, searchParam);

//   addTaskItem(filteredTaskList);
// }

// function loadTasks(): Task[] {
//   const tasksJSON = localStorage.getItem('TASKS');
//   if (tasksJSON == null) return [];
//   return JSON.parse(tasksJSON);
// }

// function saveTasks() {
//   localStorage.setItem('TASKS', JSON.stringify(allTasks));
// }
