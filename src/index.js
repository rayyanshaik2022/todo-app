import Todo from "./todo";
import Label from "./label";
import { Workspace, createWorkspace } from "./workspace";
import { Project, createProject } from "./project";



// Default workspaces
const todayWorkspace = new Workspace("Today");
const weekWorkspace = new Workspace("Week");
weekWorkspace.title = "This Week's";

// Default projects
const homeworkProject = new Project("Homework", "purple");
const personalProject = new Project("Personal", "green");

// Store workspaces
let workspaces = [
    todayWorkspace,
    weekWorkspace,
    homeworkProject,
    personalProject,
];

// Current vars
let currentWorkspace;

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
    mainContent.replaceWith(newContent);
    mainContent = newContent;

    currentWorkspace = content;
}

function addProject(project) {
    const projContainer = document.querySelector(".project-container");
    projContainer.append(createProject(project));
}

addProject(homeworkProject);
addProject(personalProject);
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
            } else if (btn.id == "group-week") {
                setContent(createWorkspace(weekWorkspace));
            } else if (btn.dataset.project != null) {

                
                let projectDiv;
                workspaces.forEach((w) => {        
                    if (w.name == btn.dataset.project) {
                        projectDiv = w;
                    }
                });

                setContent(createWorkspace(projectDiv));
            }

            // Remove from other button
            groupBtns.forEach((btn2) => {
                if (!(btn === btn2)) {
                    btn2.classList.remove("selected");
                }
            });
        }
    });
});

// Create task button
const newTodoBtn = document.querySelector("button.create-todo");
const h1Input = document.querySelector(".h1-input");
const pInput = document.querySelector(".p-input");
newTodoBtn.addEventListener("click", (e) => {
    let errors = false;
    if (h1Input.value.length < 3) {
        errors = true;
        document.querySelector("#h1-error").classList.add("active");
    } else {
        document.querySelector("#h1-error").classList.remove("active");
    }
    if (pInput.value.length < 3) {
        errors = true;
        document.querySelector("#p-error").classList.add("active");
    } else {
        document.querySelector("#p-error").classList.remove("active");
    }

    if (errors) {
        return;
    }

    let newTodo = new Todo(h1Input.value, pInput.value);
    currentWorkspace.addTodo(newTodo);
});

/*
Text input actions
*/