import { printProject, printTask } from "./utils-interface.js";
import { finishTask, removeTask } from "./utils-methods.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";

function userInterface(arr) {

    const container = document.querySelector("#container");
    const projects = document.querySelector("#projects");
    const main = document.querySelector(".main");

    let currentProjectID = "";

    const arrProjects = getLocalStorage("todo-list") || arr;


    function updateProjects() {
        projects.innerHTML = "";
        for (const project of arrProjects) {
            const projectTitle = document.createElement("div");
            projectTitle.textContent = project.title;
            projectTitle.id = project.id;
            projects.appendChild(projectTitle);
        };
    };

    updateProjects();

    function updateMain(targetID) {
        for (const project of arrProjects) {
            if (targetID === project.id) {
                main.innerHTML = "";
                printProject(main, project);
                for (const task of project.task) {
                    printTask(main, task);
                };
            };
        };
    }

    projects.addEventListener("click", (event) => {
        currentProjectID = event.target.id;
        updateMain(event.target.id);
        updateProjects();
    });

    main.addEventListener("click", (event) => {
        const taskID = event.target.closest(".task").id;
        if (!taskID) return;
        console.log(event.target.closest(".isDone").className)
        if (event.target.closest(".isDone").className === "isDone") {
            removeTask(arrProjects, taskID);
        };
        updateMain(currentProjectID);

        updateProjects();
        setLocalStorage("todo-list", arrProjects);
    });

    // main.addEventListener("mouseover", (event) => {
    //     const task = event.target.closest(".task");
    //     if (!task) return;
    //     task.classList.add("active");
    //     console.log(task)
    // })
};

export { userInterface };