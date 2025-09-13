const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addTask(text);
    input.value = '';
  }
});

function addTask(text) {
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">&times;</a>
  `;
  const remove = task.querySelector('.task__remove');
  remove.addEventListener('click', (e) => {
    e.preventDefault();
    task.remove();
  });
  list.appendChild(task);
}