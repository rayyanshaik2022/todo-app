import Todo from "./todo";
import Label from "./label";
import { Workspace, createWorkspace } from "./workspace";

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

let workspaces = [todayWorkspace, weekWorkspace];
let todos = [];

const mainContent = document.querySelector(".content");

mainContent.innerHTML += createWorkspace(todayWorkspace).innerHTML;


/*
Button Clicking
*/

// Sidebar buttons
