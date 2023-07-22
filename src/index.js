import Todo from "./todo";
import Label from "./label";
import { Workspace, createWorkspace } from "./workspace";

// Store workspaces
let workspaces = [todayWorkspace, weekWorkspace];

// Default workspaces
const todayWorkspace = new Workspace("Today");
const weekWorkspace = new Workspace("Week");
weekWorkspace.title = "This Week's";

// Default todos
let tags = [
    new Label("js", "red"),
    new Label("project", "purple"),
    new Label("todo", "orange"),
];
let todo = new Todo(
    "Practice using JS module",
    "Create a todo-list application to achieve this"
);
todo.tags = tags;
todayWorkspace.addTodo(todo);

tags = [
    new Label("css", "green"),
    new Label("html", "yellow"),
    new Label("study", "blue"),
];
todo = new Todo(
    "Practice CSS Flexbox",
    "Use practice tools such as flexbox froggy"
);
todo.tags = tags;
todayWorkspace.addTodo(todo);

let mainContent = document.querySelector(".content");

function setContent(content) {
    let newContent = content;
    mainContent.replaceWith(newContent)
    mainContent = newContent;
}

setContent(createWorkspace(todayWorkspace));



/*
Button Clicking
*/

// Sidebar button actions
const groupBtns = document.querySelectorAll(".btn-group");
groupBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (!btn.classList.contains("selected")) {
            btn.classList.add("selected");

            // Individual button logic
            if (btn.id == "group-today") {
                setContent(createWorkspace(todayWorkspace));
            }else if (btn.id == "group-week") {
                setContent(createWorkspace(weekWorkspace));
            }

            // Remove from other button
            groupBtns.forEach((btn2) => {
                if (!(btn === btn2)) {
                    btn2.classList.remove("selected");
                }
            })
         
        }
    })
})