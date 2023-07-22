import Todo from "./todo";
import Label from "./label";
import { Workspace, createWorkspace } from "./workspace";

// Default workspaces
const todayWorkspace = new Workspace("Today");
const weekWorkspace = new Workspace("Week");
weekWorkspace.title = "This Week's";

// Default todos
const tags = [
    new Label("js", "red"),
    new Label("project", "todo"),
    new Label("todo"),
];
const todo1 = new Todo(
    "Practice using JS module",
    "Create a todo-list application to achieve this"
);
todo1.tags = tags;
todayWorkspace.addTodo(todo1);

let workspaces = [todayWorkspace, weekWorkspace];
let todos = [];

const mainContent = document.querySelector(".content");

mainContent.innerHTML += createWorkspace(todayWorkspace).innerHTML;
