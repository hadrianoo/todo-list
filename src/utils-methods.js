const todayDate = () => ({
    dueDate: () => new Date(),
});

const changePriority = (arrProjects, id) => {
    arrProjects.forEach(proj => {
        if (proj.task !== []) {
            proj.task.forEach((item, index) => {
                if (id === item.id) {
                    item.priority === "none"
                        ? item.priority = "important"
                        : item.priority = "none";
                };
            });
        };
    });
}


const finishTask = (arrProjects, id) => {
    arrProjects.forEach(proj => {
        if (proj.task !== []) {
            proj.task.forEach(task => {
                if (id === task.id) {
                    task.isDone = true;
                };
            });
        };
    });
};

const removeTask = (arrProjects, id) => {
    arrProjects.forEach(proj => {
        if (proj.task !== []) {
            proj.task.forEach((item, index) => {
                if (id === item.id) {
                    proj.task.splice(index, 1);
                };
            });
        };
    });
};

export { changePriority, finishTask, removeTask };