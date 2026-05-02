import * as utilsManager from "./utils-manager.js";
import * as listManager from "./list-manager.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";
import { createTask } from "./create-list.js";

function userInterface(arr) {

    const projects = document.querySelector("#projects");
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
    }

    projects.addEventListener("click", (event) => {
        currentProjectID = event.target.id;
        updateMain(event.target.id);
        updateProjects();
    });



    main.addEventListener("click", (event) => {
        arrProjects = getLocalStorage("todo-list") || arr;
        const projectID = event.target.closest(".project-wrapper");
        const taskDOM = event.target.closest(".task");

        if (event.target.closest("[data-action]") === null) return;

        const action = event.target.closest("[data-action]").dataset.action;
        const actions = {
            "toggle-active": () => {
                if (taskDOM.classList.contains("editable")) return;
                taskDOM.classList.toggle("active");
            },
            "toggle-edit": () => {
                taskDOM.classList.toggle("editable");
                if (taskDOM.classList.contains("editable")) {
                    taskDOM.classList.add("active");
                } else {
                    taskDOM.classList.remove("active");
                };
                listManager.editTaskList(arrProjects, taskDOM.id, utilsManager.editTaskDOM(taskDOM));
            },
            "remove-task": () => {
                listManager.removeTask(arrProjects, taskDOM.id);
                updateMain(currentProjectID);
            },
            "change-priority": () => {
                listManager.changePriority(arrProjects, taskDOM.id);
                updateMain(currentProjectID);
            },
            "add-task": () => {
                listManager.addNewTask(arrProjects, createTask(), projectID.id);
                updateMain(currentProjectID);
            },
        }
        if (actions[action]) actions[action]();

        setLocalStorage("todo-list", arrProjects);
    });

};

export { userInterface };