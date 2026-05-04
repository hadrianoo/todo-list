function createTask(
    description = "What is your task?",
    notes = "Add details...",
    priority = "none",
    dueDate = new Date()) {
    return {
        id: crypto.randomUUID(),
        description,
        notes,
        isDone: false,
        priority,
        dueDate,
    };
};

function createProject(
    title = "New project",
    dueDate = new Date(),
    notes = "Add details...") {
    return {
        id: crypto.randomUUID(),
        title,
        dueDate,
        notes,
        task: [],
    };
};

function createList() {
    let list = [
        {
            id: crypto.randomUUID(),
            title: "Default",
            task: [],
        },
    ];

    function getList() { return list };
    function addProjectToList(title, dueDate, notes) {
        const project = createProject(title, dueDate, notes);
        list.push(project);
    };

    function addTaskToProject(title, description, notes) {
        list.forEach(project => {
            if (project.title === title) {
                const task = createTask(description, notes);
                project.task.push(task);
            };
        });
    }

    return {
        getList,
        addProjectToList,
        addTaskToProject,
    }
};

export {
    createList,
    createTask,
    createProject
};