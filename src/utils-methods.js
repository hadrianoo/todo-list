const todayDate = () => ({
    dueDate: () => new Date(),
})

const setPriority = (task, priority) => {
    task.forEach(element => element.priority = priority);
}


const finishTask = (arrProjects, id) => {
    arrProjects.forEach(proj => {
        if (proj.task !== []) {
            proj.task.forEach(task => {
                if (id === task.id) {
                    task.isDone = true;
                }
            })
        }
    })
};

const removeTask = (arrProjects, id) => {
    arrProjects.forEach(proj => {
        if (proj.task !== []) {
            proj.task.forEach((item, index) => {
                if (id === item.id) {
                    proj.task.splice(index, 1);
                }
            })
        }
    })


};

export { finishTask, removeTask };