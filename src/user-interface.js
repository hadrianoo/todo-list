function userInterface(arrProjects) {

    const container = document.querySelector("#container");
    const projects = document.querySelector("#projects");
    const main = document.querySelector("#main");


    for (const project of arrProjects) {
        const projectTitle = document.createElement("div");
        projectTitle.textContent = project.title;
        projectTitle.id = project.id;
        projects.appendChild(projectTitle);
    };


    projects.addEventListener("click", (event) => {
        console.log(event.target.id);
        for (const project of arrProjects) {
            if (event.target.id === project.id) {
                main.innerHTML = "";
                const projectContainer = document.createElement("div");
                const title = document.createElement("div");
                const dueDate = document.createElement("div");
                const notes = document.createElement("div");

                projectContainer.id = project.id;
                title.className = "title";
                dueDate.className = "dueDate";
                notes.className = "notes";


                title.textContent = project.title;
                dueDate.textContent = project.dueDate;
                notes.textContent = project.notes;


                projectContainer.appendChild(title);
                projectContainer.appendChild(dueDate);
                projectContainer.appendChild(notes);
                main.appendChild(projectContainer);

                for (const task of project.task) {
                    const taskContainer = document.createElement("div");
                    const description = document.createElement("div");
                    const notes = document.createElement("div");
                    const isDone = document.createElement("div");
                    const priority = document.createElement("div");
                    const dueDate = document.createElement("div");

                    taskContainer.id = task.id;
                    taskContainer.className = "task";
                    description.className = "description";
                    notes.className = "notes";
                    isDone.className = "isDone";
                    priority.className = "priority";
                    priority.className = "priority";
                    dueDate.className = "dueDate";

                    description.textContent = task.description;
                    notes.textContent = task.notes;
                    isDone.textContent = task.isDone;
                    priority.textContent = task.priority;
                    dueDate.textContent = task.dueDate;

                    taskContainer.appendChild(description);
                    taskContainer.appendChild(notes);
                    taskContainer.appendChild(isDone);
                    taskContainer.appendChild(priority);
                    taskContainer.appendChild(dueDate);
                    main.appendChild(taskContainer);

                };
            };

        };


    });




};

export { userInterface };