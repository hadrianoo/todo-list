const changePriority = (listOfProjects, id) => {
    listOfProjects.forEach(project => {
        if (project.task.length > 0) {
            project.task.forEach((item) => {
                if (id === item.id) {
                    item.priority = (item.priority === "none")
                        ? "important"
                        : "none"
                };
            });
        };
    });
}


const finishTask = (listOfProjects, id) => {
    listOfProjects.forEach(project => {
        if (project.task.length > 0) {
            project.task.forEach(task => {
                if (id === task.id) {
                    task.isDone = true;
                };
            });
        };
    });
};

const removeTask = (listOfProjects, id) => {
    listOfProjects.forEach(project => {
        if (project.task.length > 0) {
            project.task.forEach((item, index) => {
                if (id === item.id) {
                    project.task.splice(index, 1);
                };
            });
        };
    });
};

const removeProject = (listOfProjects, id) => {
    if (listOfProjects.length > 0) {
        listOfProjects.forEach((project, index) => {
            if (id === project.id) {
                if (project.title !== "Default") {
                    listOfProjects.splice(index, 1);
                }
            };
        })
    };
};

const addNewTask = (listOfProjects, newTask, id) => {
    listOfProjects.forEach(project => {
        if (project.id == id) {
            project.task.push(newTask);
        };
    });
};

const addNewProject = (listOfProjects, newProject) => {
    listOfProjects.push(newProject);
};

const editTaskList = (listOfProjects, id, data) => {
    if (!data) return;
    listOfProjects.forEach(project => {
        if (project.task.length > 0) {
            project.task.forEach((item, index) => {
                if (id === item.id) {
                    item.description = data.description;
                    item.notes = data.notes;
                    item.dueDate = data.dueDate;
                };
            });
        };
    });
};

export {
    changePriority,
    finishTask,
    removeTask,
    addNewTask,
    editTaskList,
    removeProject,
    addNewProject
};