import { svgLib } from "./svg-elements.js";

function printProjectMain(appendTo, project) {
    const projectContainer = document.createElement("div");
    const title = document.createElement("div");
    const dueDate = document.createElement("div");
    const notes = document.createElement("div");

    appendTo.id = project.id;
    projectContainer.className = "header";
    title.className = "title";
    dueDate.className = "dueDate";
    notes.className = "notes";

    title.textContent = project.title;
    dueDate.textContent = project.dueDate;
    notes.textContent = project.notes;

    projectContainer.appendChild(title);
    projectContainer.appendChild(dueDate);
    projectContainer.appendChild(notes);
    appendTo.appendChild(projectContainer);
};

function printTaskMain(appendTo, task) {
    const taskContainer = document.createElement("div");
    const description = document.createElement("input");
    const notes = document.createElement("input");
    const isDone = document.createElement("div");
    const priority = document.createElement("div");
    const dueDate = document.createElement("div");

    description.type = "text";
    description.readOnly = true;
    notes.type = "text";
    notes.readOnly = true;

    taskContainer.id = task.id;
    taskContainer.className = "task";
    isDone.className = "isDone";
    description.className = "description";
    notes.className = "notes";
    priority.className = "priority";
    priority.className = "priority";
    dueDate.className = "dueDate";

    isDone.innerHTML = svgLib().exitSVG;
    description.placeholder = task.description;
    notes.placeholder = task.notes;
    priority.innerHTML = svgLib().importantSVG;
    dueDate.textContent = task.dueDate;

    taskContainer.appendChild(isDone);
    taskContainer.appendChild(description);
    taskContainer.appendChild(notes);
    taskContainer.appendChild(priority);
    taskContainer.appendChild(dueDate);
    appendTo.appendChild(taskContainer);
};

function printProjects(appendTo, arrProjects) {
    for (const project of arrProjects) {
        const projectTitle = document.createElement("div");
        projectTitle.textContent = project.title;
        projectTitle.id = project.id;
        appendTo.appendChild(projectTitle);
    };
};

function addButtonProjects(appendTo) {
    appendTo.innerHTML = svgLib().addSVG;
};

function addButtonMain(appendTo) {
    const addTask = document.createElement("div");
    addTask.className = "add-main button";
    addTask.innerHTML = svgLib().addSVG;
    appendTo.appendChild(addTask);
};

function createNewTask() {

}

export { printProjectMain, printTaskMain, printProjects, addButtonProjects, addButtonMain };

