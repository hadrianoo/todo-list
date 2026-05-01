import { printProjectMain, printTaskMain, printProjects, addButtonProjects, addButtonMain } from "./utils-interface.js";
import { changePriority, finishTask, removeTask } from "./utils-methods.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";

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
        const taskID = event.target.closest(".task");
        const taskIsDone = event.target.closest(".isDone");
        const taskPriority = event.target.closest(".priority");
        if (taskID) {
            if (event.target.closest(".task").className === "task") {
                // console.log(taskID.classList)
                taskID.classList.toggle("active");
                console.log(taskID.classList)
            }
        }
        if (taskIsDone) {
            if (event.target.closest(".isDone").className === "isDone") {
                removeTask(arrProjects, taskID.id);
            };
        } else if (taskPriority) {
            if (event.target.closest(".priority").className === "priority") {
                changePriority(arrProjects, taskID.id);
            };
        }


        updateMain(currentProjectID);
        updateProjects();
        setLocalStorage("todo-list", arrProjects);
    });

};

export { userInterface };