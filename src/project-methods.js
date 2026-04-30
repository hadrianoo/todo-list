const todayDate = () => ({
    dueDate: () => new Date(),
})

const setPriority = (task, priority) => {
    task.forEach(element => element.priority = priority);
}


// function finishTask(task) {
//     task.isDone = true;
// }

const finishTask = (task) => {
    task.isDone = true;
}

export { finishTask };