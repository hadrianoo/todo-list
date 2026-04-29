function createTask(description, notes, priority, dueDate) {
    return {
        description,
        notes,
        isDone: false,
        priority,
        dueDate,
    };
};

function createProject(title, dueDate, priority, notes) {
    return {
        id: crypto.randomUUID(),
        title,
        dueDate,
        priority,
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
    function addProjectToList(title, dueDate, priority, notes) {
        const project = createProject(title, dueDate, priority, notes);
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

export { createList };