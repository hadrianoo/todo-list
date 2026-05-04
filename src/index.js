import "./styles.css";
import { createList } from "./create-list.js";
import { getLocalStorage, setLocalStorage } from "./storage.js";
import { finishTask } from "./list-manager.js";
import { userInterface } from "./user-interface.js";

const list = createList();

list.addTaskToProject("Default", "Buy paint", "Choose color and calculate amount needed")

list.addProjectToList("Kitchen renovation", "2024-12-31", "Start with painting the walls")
list.addTaskToProject("Kitchen renovation", "Buy paint", "Choose color and calculate amount needed")
list.addTaskToProject("Kitchen renovation", "Remove old tiles", "Kitchen backsplash area only")
list.addTaskToProject("Kitchen renovation", "Install new cabinets", "Assemble and mount upper and lower units")
list.addTaskToProject("Kitchen renovation", "Lay new floor", "Measure area before ordering tiles")


userInterface(list.getList())






