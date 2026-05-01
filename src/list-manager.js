const changePriority = (listOfProjects, id) => {
    listOfProjects.forEach(project => {
        if (project.task !== []) {
            project.task.forEach((item, index) => {
                if (id === item.id) {
                    item.priority = (item.priority === "none")
                        ? "important"
                        : "none"
                    // item.priority === "none"
                    //     ? item.priority = "important"
                    //     : item.priority = "none";
                };
            });
        };
    });
}


const finishTask = (listOfProjects, id) => {
    listOfProjects.forEach(project => {
        if (project.task !== []) {
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
        if (project.task !== []) {
            project.task.forEach((item, index) => {
                if (id === item.id) {
                    project.task.splice(index, 1);
                };
            });
        };
    });
};

const addNewTask = (listOfProjects, newTask, id) => {
    listOfProjects.forEach(project => {
        if (project.id == id) {
            project.task.push(newTask);
        };
    });
};

export { changePriority, finishTask, removeTask, addNewTask };