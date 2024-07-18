document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const newTaskDescription = document.getElementById('new-task-description').value;

      if (newTaskDescription) {
          const taskItem = document.createElement('li');
          taskItem.textContent = newTaskDescription;

          // Add delete button to each task item
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', () => {
              taskItem.remove();
          });

          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);

          form.reset(); // Reset the form input field
      }
  });
});
