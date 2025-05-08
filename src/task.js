export class Task {
    constructor(title, description, project, dueDate = undefined, priority = false, complete = false) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }

    togglePriority() {
        this.priority = this.priority ? false : true;
    }

    editTask(title, description, project, dueDate, priority, complete) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }

    print() {
        return {
            title: this.title,
            description: this.description,
            project: this.project,
            dueDate: this.dueDate,
            priority: this.priority,
            complete: this.complete,
        };
    }
}

export class List {
    constructor() {
        this.tasks = [];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(title, description, project, dueDate, priority, complete) {
        this.tasks.push(new Task(title, description, project, dueDate, priority, complete));
    }

    removeTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.title !== taskName);
    }

    filterByProject(project) {
        return this.tasks.filter((task) => task.project == project);
    }
}
