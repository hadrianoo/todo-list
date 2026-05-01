import { format } from "date-fns";
import { svgLib } from "./svg-elements.js";

function printProjectMain(appendTo, project) {
    const projectContainer = document.createElement("div");
    const title = document.createElement("div");
    const dueDate = document.createElement("input");
    const notes = document.createElement("div");

    dueDate.type = "date";
    dueDate.readOnly = true;

    appendTo.id = project.id;
    projectContainer.className = "header";
    title.className = "title";
    dueDate.className = "dueDate";
    notes.className = "notes";

    title.textContent = project.title;
    dueDate.valueAsDate = new Date(project.dueDate);
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
    const dueDate = document.createElement("input");
    const edit = document.createElement("div");

    description.type = "text";
    description.readOnly = true;
    notes.type = "text";
    notes.readOnly = true;
    dueDate.type = "date";
    dueDate.readOnly = true;

    taskContainer.id = task.id;
    taskContainer.className = "task";
    taskContainer.dataset.action = "toggle-active";
    isDone.className = "isDone button";
    isDone.dataset.action = "remove-task";
    description.className = "description";
    notes.className = "notes";
    priority.className = "priority button";

    task.priority === "none"
        ? taskContainer.style.backgroundColor = "rgb(206, 206, 206)"
        : taskContainer.style.backgroundColor = "rgb(226, 235, 101)";


    dueDate.className = "dueDate";
    edit.className = "edit button";
    edit.dataset.action = "toggle-edit";

    isDone.innerHTML = svgLib().exitSVG;
    description.placeholder = task.description;
    notes.placeholder = task.notes;
    priority.innerHTML = svgLib().importantSVG;
    dueDate.valueAsDate = new Date(task.dueDate);
    edit.innerHTML = svgLib().editSVG;

    taskContainer.appendChild(isDone);
    taskContainer.appendChild(description);
    taskContainer.appendChild(notes);
    taskContainer.appendChild(priority);
    taskContainer.appendChild(dueDate);
    taskContainer.appendChild(edit);
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
    addTask.dataset.action = "add-task";
    addTask.innerHTML = svgLib().addSVG;
    appendTo.appendChild(addTask);
};

export { printProjectMain, printTaskMain, printProjects, addButtonProjects, addButtonMain };

