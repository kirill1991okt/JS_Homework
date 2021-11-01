import Component from '../../../views/component.js';

import Error404 from '../../../views/pages/error404.js';

import Tasks from '../../../models/tasks.js';

class Edit extends Component {
    constructor() {
        super();

        this.task = this.tasks.find(task => task.id === this.request.id);
    }

    render() {
        return new Promise(resolve => {
            let html;

            if (this.task) {
                const {id, title} = this.task;

				html = `
					<h1 class="page-title">Task Edit</h1>
					
					<div class="task-edit">
						<p>
							<b>Task Title:</b>
							<input class="task-edit__title" type="text" value="${title}">
						</p>
				
						<div class="task-edit__buttons">
							<button class="task-edit__btn-save button">Save Task</button>
							<a class="task-edit__btn-back button" href="#/task/${id}">Back to Info</a>
						</div>
					</div>
				`;
            } else {
                html = new Error404().render();
            }

            resolve(html);
        });
    }

    afterRender() {
        this.task && this.setActions();
    }

    setActions() {
        const editTaskTitle = document.getElementsByClassName('task-edit__title')[0],
			saveTaskBtn = document.getElementsByClassName('task-edit__btn-save')[0];

		editTaskTitle.addEventListener('keyup', () => saveTaskBtn.disabled = !editTaskTitle.value.trim());
        saveTaskBtn.addEventListener('click', () => this.editTask(editTaskTitle));
    }

    editTask(editTaskTitle) {
        this.task.title = editTaskTitle.value.trim();
        Tasks.setTasksToLS(this.tasks);

        this.redirectToTaskInfo();
    }

    redirectToTaskInfo() {
        location.hash = `#/task/${this.task.id}`;
    }
}

export default Edit;