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
let currentTags = [];

// Default todos
let tags = [
    new Label("js"),
    new Label("project"),
    new Label("todo"),
];
let todo = new Todo(
    "Practice using JS module",
    "Create a todo-list application to achieve this"
);
todo.tags = tags;
todayWorkspace.addTodo(todo);

tags = [
    new Label("css"),
    new Label("html5"),
    new Label("work"),
];
todo = new Todo(
    "Practice CSS Flexbox",
    "Use practice tools such as flexbox froggy"
);
todo.tags = tags;
todayWorkspace.addTodo(todo);

let mainContent = document.querySelector(".content");

function setContent(content, workspace) {
    let newContent = content;
    mainContent.replaceWith(newContent);
    mainContent = newContent;

    currentWorkspace = workspace;
}

function addProject(project) {
    const projContainer = document.querySelector(".project-container");
    projContainer.append(createProject(project));
}

addProject(homeworkProject);
addProject(personalProject);
setContent(createWorkspace(todayWorkspace), todayWorkspace);

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
                setContent(createWorkspace(todayWorkspace), todayWorkspace);
            } else if (btn.id == "group-week") {
                setContent(createWorkspace(weekWorkspace), weekWorkspace);
            } else if (btn.dataset.project != null) {
                let projectDiv;
                workspaces.forEach((w) => {
                    if (w.name == btn.dataset.project) {
                        projectDiv = w;
                    }
                });

                setContent(createWorkspace(projectDiv), projectDiv);
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
    newTodo.tags = currentTags;
    currentWorkspace.addTodo(newTodo);

    setContent(createWorkspace(currentWorkspace), currentWorkspace);

    // Close popup

    document.querySelector(".pop-up").classList.remove("active");
});

// Open label text field button
const addLabel = document.querySelector(".tag-icon");
addLabel.addEventListener("click", (e) => {
    document.querySelector(".add-tag").classList.toggle("active");
});

/*
Text input actions
*/
console.log("test");

// Close popup
const popup = document.querySelector(".pop-up");
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        document.querySelector(".h1-input").value = "";
        document.querySelector(".p-input").value = "";
        popup.classList.remove("active");
        currentTags = [];
        
        document.querySelector(".edit-label-container").replaceChildren();
    }
});

const closeEditBtn = document.querySelector(".edit-circle");
closeEditBtn.addEventListener("click", (event) => {
    document.querySelector(".h1-input").value = "";
    document.querySelector(".p-input").value = "";
    popup.classList.remove("active");
    currentTags = [];

    document.querySelector(".edit-label-container").replaceChildren();
});

export { setContent };

// Create tags
const tagInput = document.querySelector(".add-tag");
const labelContainer = document.querySelector(".edit-label-container");
tagInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (tagInput.value.length >= 1) {

            let nextLabelObj = new Label(tagInput.value);
            currentTags.push(
                nextLabelObj
            );

            let nextLabel = document.createElement("div");
            nextLabel.classList.add("label")
            nextLabel.classList.add(nextLabelObj.color);
            nextLabel.textContent = tagInput.value;

            
            labelContainer.append(nextLabel);
            tagInput.value = "";
        }
    }
});
