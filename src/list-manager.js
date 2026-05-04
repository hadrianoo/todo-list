const changePriority = (listOfProjects, id) => {
    return listOfProjects.map(project => ({
        ...project,
        task: project.task.map(task => {
            if (id !== task.id) {
                return task;
            };
            return {
                ...task,
                priority: task.priority === "none" ? "important" : "none"
            }
        }),
    }));
};

const removeTask = (listOfProjects, id) => {
    return listOfProjects.map(project => ({
        ...project,
        task: project.task.filter(task => id !== task.id),
    }));
};

const removeProject = (listOfProjects, id) => {
    return listOfProjects.filter(project => {
        if (id === project.id) return true;
        return project.title !== "Default";
    });
};

const addNewTask = (listOfProjects, newTask, id) => {
    return listOfProjects.map(project => {
        if (project.id !== id) {
            return project;
        };
        return {
            ...project,
            task: [...project.task, newTask]
        }
    });

};

const addNewProject = (listOfProjects, newProject) => {
    return [...listOfProjects, newProject]
};

const editTaskList = (listOfProjects, id, data) => {
    return listOfProjects.map(project => {
        return {
            ...project,
            task: project.task.map(task => {
                if (id !== task.id) return task;
                return {
                    ...task,
                    ...data,
                };
            })
        };
    });
};

const editProjectList = (listOfProjects, id, data) => {
    return listOfProjects.map(project => {
        if (id !== project.id) return project;
        return {
            ...project,
            ...data,
        };
    });


    // listOfProjects.forEach(project => {
    //     if (id === project.id) {
    //         project.title = data.title;
    //         project.notes = data.notes;
    //         project.dueDate = data.dueDate;
    //     };
    // });
};

export {
    changePriority,
    removeTask,
    addNewTask,
    editTaskList,
    removeProject,
    addNewProject,
    editProjectList,
};