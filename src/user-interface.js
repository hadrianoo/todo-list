import * as utilsManager from "./utils-manager.js";
import * as listManager from "./list-manager.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";
import { createTask, createProject } from "./create-list.js";

function userInterface(arr) {

    const projects = document.querySelector("#projects");
    const projectsContainer = document.querySelector("#projects-container");
    const main = document.querySelector(".main");
    const addProject = document.querySelector(".add-project");
    const projectWrapper = document.querySelector(".project-wrapper");

    let currentProjectID = "";

    let arrProjects = getLocalStorage("todo-list") || arr;
    function updateProjects() {
        projects.innerHTML = "";
        utilsManager.printProjects(projects, arrProjects);
        utilsManager.addButtonProjects(addProject);
    };

    updateProjects();

    function updateMain(targetID) {
        projectWrapper.innerHTML = "";
        const taskWrapper = document.createElement("div");
        taskWrapper.className = "task-wrapper";

        for (const project of arrProjects) {
            if (targetID === project.id) {
                utilsManager.printProjectMain(projectWrapper, project);
                for (const task of project.task) {
                    utilsManager.printTaskMain(taskWrapper, task);
                };
            };
        };
        projectWrapper.appendChild(taskWrapper);
        utilsManager.addButtonMain(projectWrapper);
    };

    projectsContainer.addEventListener("click", (event) => {
        arrProjects = getLocalStorage("todo-list") || arr;
        updateMain(event.target.id);

        if (event.target.closest("[data-action]") === null) return;
        const action = event.target.closest("[data-action]").dataset.action;
        const actions = {
            "remove-project": () => {
                currentProjectID = event.target.closest(".project").id;
                listManager.removeProject(arrProjects, currentProjectID);
            },
            "add-project": () => {
                console.log("fired")
                listManager.addNewProject(arrProjects, createProject());
            },
        };
        if (actions[action]) actions[action]();

        setLocalStorage("todo-list", arrProjects);
        updateProjects();
    });


    main.addEventListener("click", (event) => {
        arrProjects = getLocalStorage("todo-list") || arr;
        const currentTask = event.target.closest(".task");

        if (event.target.closest("[data-action]") === null) return;

        const action = event.target.closest("[data-action]").dataset.action;
        const actions = {
            "toggle-active": () => {
                if (currentTask.classList.contains("editable")) return;
                currentTask.classList.toggle("active");
            },
            "toggle-edit": () => {
                currentTask.classList.toggle("editable");
                if (currentTask.classList.contains("editable")) {
                    currentTask.classList.add("active");
                } else {
                    currentTask.classList.remove("active");
                    const description = currentTask.querySelector(".description").value;
                    const notes = currentTask.querySelector(".notes").value;
                    const dueDate = currentTask.querySelector(".dueDate").value;
                    listManager.editTaskList(arrProjects, currentTask.id, { description, notes, dueDate });
                };
                utilsManager.editTaskDOM(currentTask);
            },
            "remove-task": () => {
                listManager.removeTask(arrProjects, currentTask.id);
                updateMain(currentProjectID);
            },
            "change-priority": () => {
                listManager.changePriority(arrProjects, currentTask.id);
                updateMain(currentProjectID);
            },
            "add-task": () => {
                listManager.addNewTask(arrProjects, createTask(), currentProjectID);
                updateMain(currentProjectID);
            },
        }
        if (actions[action]) actions[action]();

        setLocalStorage("todo-list", arrProjects);
    });

};

export { userInterface };