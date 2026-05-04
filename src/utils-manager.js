import { svgLib } from "./svg-elements.js";

function printProjectMain(appendTo, project) {
    const projectContainer = document.createElement("div");
    const title = document.createElement("input");
    const dueDate = document.createElement("input");
    const notes = document.createElement("input");
    const edit = document.createElement("div");

    title.type = "text";
    title.name = "title";
    title.readOnly = true;

    dueDate.type = "date";
    dueDate.name = "dueDate";
    dueDate.readOnly = true;

    notes.type = "text";
    notes.name = "notes";
    notes.readOnly = true;
    if (project.title === "Default") {
        projectContainer.classList.add("default");
    }

    appendTo.id = project.id;
    projectContainer.classList.add("header");
    title.className = "title";
    dueDate.className = "dueDate";
    notes.className = "notes";

    title.value = project.title;
    dueDate.valueAsDate = new Date(project.dueDate);
    notes.value = project.notes;

    edit.innerHTML = svgLib().editSVG;
    edit.dataset.action = "toggle-edit-project";
    edit.className = "edit button";

    projectContainer.appendChild(title);
    projectContainer.appendChild(dueDate);
    projectContainer.appendChild(notes);
    projectContainer.appendChild(edit);
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
    description.name = "description";
    description.readOnly = true;
    notes.type = "text";
    notes.name = "notes";
    notes.readOnly = true;
    dueDate.type = "date";
    dueDate.name = "date";
    dueDate.readOnly = true;

    taskContainer.id = task.id;
    taskContainer.className = "task";
    taskContainer.dataset.action = "toggle-active";
    isDone.className = "isDone button";
    isDone.dataset.action = "remove-task";
    description.className = "description";
    notes.className = "notes";
    priority.className = "priority button";
    priority.dataset.action = "change-priority";

    taskContainer.style.backgroundColor = (task.priority === "none")
        ? "rgb(206, 206, 206)"
        : "rgb(226, 235, 101)";

    dueDate.className = "dueDate";
    edit.className = "edit button";
    edit.dataset.action = "toggle-edit-task";

    isDone.innerHTML = svgLib().exitSVG;
    description.value = task.description;
    notes.value = task.notes;
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
        const projectRemove = document.createElement("div");
        projectTitle.textContent = project.title;
        projectTitle.id = project.id;
        projectTitle.className = "project";
        if (project.title !== "Default") {
            projectRemove.innerHTML = svgLib().exitSVG;
            projectRemove.dataset.action = "remove-project";
            projectRemove.className = "projectRemove button";
        };
        projectTitle.appendChild(projectRemove);
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

function editTaskDOM(task) {
    const nodeList = task.querySelectorAll("input");
    for (let i = 0; i < nodeList.length; i++) {
        if (task.classList.contains("editable")) {
            nodeList[i].readOnly = false;
        } else {
            nodeList[i].readOnly = true;
        };
    };
};

function editProjectDOM(project) {
    const nodeList = project.querySelectorAll("input");
    for (let i = 0; i < nodeList.length; i++) {
        if (project.classList.contains("editable")) {
            nodeList[i].readOnly = false;
        } else {
            nodeList[i].readOnly = true;
        };
    };
};

export {
    printProjectMain,
    printTaskMain,
    printProjects,
    addButtonProjects,
    addButtonMain,
    editTaskDOM,
    editProjectDOM,
};

