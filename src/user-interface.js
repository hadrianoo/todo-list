import { printProjectMain, printTaskMain, printProjects, addButtonProjects, addButtonMain } from "./utils-interface.js";
import { changePriority, finishTask, removeTask } from "./utils-methods.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";

function userInterface(arr) {

    const container = document.querySelector("#container");
    const projects = document.querySelector("#projects");
    const main = document.querySelector(".main");
    const addProject = document.querySelector(".add-project");

    let currentProjectID = "";

    const arrProjects = getLocalStorage("todo-list") || arr;

    function updateProjects() {
        projects.innerHTML = "";
        printProjects(projects, arrProjects);
        addButtonProjects(addProject);
    };

    updateProjects();

    function updateMain(targetID) {
        for (const project of arrProjects) {
            if (targetID === project.id) {
                main.innerHTML = "";
                printProjectMain(main, project);
                for (const task of project.task) {
                    printTaskMain(main, task);
                };
            };
        };
        addButtonMain(main);
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