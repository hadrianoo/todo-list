import { svgLib } from "./svg-elements.js";

function printProject(appendTo, project) {
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

function printTask(appendTo, task) {
    const taskContainer = document.createElement("div");
    const description = document.createElement("div");
    const notes = document.createElement("div");
    const isDone = document.createElement("div");
    const priority = document.createElement("div");
    const dueDate = document.createElement("div");

    taskContainer.id = task.id;
    taskContainer.className = "task";
    isDone.className = "isDone";
    description.className = "description";
    notes.className = "notes";
    priority.className = "priority";
    priority.className = "priority";
    dueDate.className = "dueDate";

    isDone.innerHTML = svgLib().exitSVG;
    description.textContent = task.description;
    notes.textContent = task.notes;
    priority.textContent = task.priority;
    dueDate.textContent = task.dueDate;

    taskContainer.appendChild(isDone);
    taskContainer.appendChild(description);
    taskContainer.appendChild(notes);
    taskContainer.appendChild(priority);
    taskContainer.appendChild(dueDate);
    appendTo.appendChild(taskContainer);
};

export { printProject, printTask };

