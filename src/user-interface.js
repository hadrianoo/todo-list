import { printProjectMain, printTaskMain, printProjects, addButtonProjects, addButtonMain, editTask } from "./utils-interface.js";
import * as listManager from "./list-manager.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";
import { createTask } from "./create-list.js";

function userInterface(arr) {

    const projects = document.querySelector("#projects");
    const main = document.querySelector(".main");
    const addProject = document.querySelector(".add-project");
    const projectWrapper = document.querySelector(".project-wrapper");

    let currentProjectID = "";

    const arrProjects = getLocalStorage("todo-list") || arr;

    function updateProjects() {
        projects.innerHTML = "";
        printProjects(projects, arrProjects);
        addButtonProjects(addProject);
    };

    updateProjects();

    function updateMain(targetID) {
        projectWrapper.innerHTML = "";
        const taskWrapper = document.createElement("div");
        taskWrapper.className = "task-wrapper";

        for (const project of arrProjects) {
            if (targetID === project.id) {
                printProjectMain(projectWrapper, project);
                for (const task of project.task) {
                    printTaskMain(taskWrapper, task);
                };
            };
        };
        projectWrapper.appendChild(taskWrapper);
        addButtonMain(projectWrapper);
    }

    projects.addEventListener("click", (event) => {
        currentProjectID = event.target.id;
        updateMain(event.target.id);
        updateProjects();
    });



    main.addEventListener("click", (event) => {
        const projectID = event.target.closest(".project-wrapper");
        const taskID = event.target.closest(".task");
        const taskIsDone = event.target.closest(".isDone");
        const taskPriority = event.target.closest(".priority");

        if (event.target.closest("[data-action]") === null) return;

        const action = event.target.closest("[data-action]").dataset.action;
        const actions = {
            "toggle-active": () => taskID.classList.toggle("active"),
            "toggle-edit": () => {
                taskID.classList.toggle("editable");
                if (!taskID.classList.contains("active")) {
                    taskID.classList.toggle("active")
                }
                editTask(taskID);
            },
            "remove-task": () => {
                listManager.removeTask(arrProjects, taskID.id);
                updateMain(currentProjectID);
            },
            "change-priority": () => {
                listManager.changePriority(arrProjects, taskID.id);
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