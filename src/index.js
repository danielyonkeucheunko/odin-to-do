import {Task, List} from "./task.js";

import "normalize.css";
import "./styles.css";

const list = new List();
list.addTask("Do the Dishes", "Test", "Home", undefined, false, false);
list.addTask("Do the Dishes", "Test", "Work", undefined, false, false);
list.getTasks().forEach((element) => {
    console.log(element.print());
});

list.filterByProject("Work").forEach((element) => {
    console.log(element.print());
});
