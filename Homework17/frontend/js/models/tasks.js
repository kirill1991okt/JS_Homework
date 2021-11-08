// import { resolve } from 'path/posix';

// import { resolve } from 'path/posix';

class Tasks {
  getTasksList() {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', 'http://localhost:3000/api/tasks');

      xhr.onload = () => resolve(JSON.parse(xhr.response));

      xhr.send();
    });
  }

  addTask(newTask) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', 'http://localhost:3000/api/task');
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => resolve(JSON.parse(xhr.response));

      xhr.send(JSON.stringify(newTask));
    });
  }

  getTask(id) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', `http://localhost:3000/api/task/${id}`);
      console.log(xhr.response);

      xhr.onload = () => resolve(JSON.parse(xhr.response));

      xhr.send();
    });
  }

  editTask(updatedTask) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('PUT', `http://localhost:3000/api/task/${updatedTask.id}`);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => resolve();

      xhr.send(JSON.stringify(updatedTask));
    });
  }

  removeTask(id) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('DELETE', `http://localhost:3000/api/task`);
      xhr.setRequestHeader('Content-Type', 'application/json');

      
      xhr.onload = () => resolve();
      xhr.send(JSON.stringify({ id }));
    });
  }

  removeTaskList() {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open('DELETE', 'http://localhost:3000/api/tasks');
      xhr.setRequestHeader('Content-Type', 'application/json');

      //   xhr.open('GET', 'http://localhost:3000/api/tasks');

      xhr.onload = () => resolve();

      xhr.send();
    });
  }

  changeStatus(id, task) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', `http://localhost:3000/api/task/${id}`);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => resolve();


      xhr.send(JSON.stringify(task));
    });
  }
}

export default Tasks;
