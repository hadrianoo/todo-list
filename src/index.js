import "./styles.css";
import { createList } from "./todo-list.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";
import { finishTask } from "./project-methods.js";
import { userInterface } from "./user-interface.js";

const list = createList();

list.addTaskToProject("Default", "Buy paint", "Choose color and calculate amount needed")
list.addTaskToProject("Default", "Remove old tiles", "Kitchen backsplash area only")
list.addTaskToProject("Default", "Install new cabinets", "Assemble and mount upper and lower units")
list.addTaskToProject("Default", "Lay new floor", "Measure area before ordering tiles")

list.addProjectToList("Kitchen renovation", "2024-12-31", "Start with painting the walls")
list.addTaskToProject("Kitchen renovation", "Buy paint", "Choose color and calculate amount needed")
list.addTaskToProject("Kitchen renovation", "Remove old tiles", "Kitchen backsplash area only")
list.addTaskToProject("Kitchen renovation", "Install new cabinets", "Assemble and mount upper and lower units")
list.addTaskToProject("Kitchen renovation", "Lay new floor", "Measure area before ordering tiles")

list.addProjectToList("Garden redesign", "2025-03-15", "Focus on the backyard first")
list.addTaskToProject("Garden redesign", "Clear old plants", "Remove dead bushes and weeds")
list.addTaskToProject("Garden redesign", "Buy new soil", "Calculate volume for all beds")
list.addTaskToProject("Garden redesign", "Plant new shrubs", "Follow the layout plan")
list.addTaskToProject("Garden redesign", "Install irrigation", "Drip system for vegetable beds")

list.addProjectToList("Home office setup", "2025-01-31", "Need to be done before Q1")
list.addTaskToProject("Home office setup", "Buy desk", "Adjustable standing desk preferred")
list.addTaskToProject("Home office setup", "Cable management", "Hide all cables behind the wall panel")
list.addTaskToProject("Home office setup", "Set up monitors", "Dual monitor arm mount")
list.addTaskToProject("Home office setup", "Install shelving", "Two shelves above the desk")



for (const item of list.getList()) {

    for (const task of item.task) {
        finishTask(task);
        console.log(task)

    }

}
console.table(list.getList());

userInterface(list.getList())






