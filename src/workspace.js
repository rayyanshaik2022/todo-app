import Label from "./label";
import Todo from "./todo";

class Workspace {
    constructor(name) {
        this._name = name;
        this._title = name + "'s";
        this._todos = [];
        this._type = "workspace";
    }

    get todos() {
        return this._todos;
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }
}

function createWorkspace(workspace) {
    const content = document.createElement("div");
    content.classList.add("content");

    content.innerHTML = `
        <h1 class="todo-title">${workspace.title} Todos</h1>
        <h2 class="todo-desc">
            You've got <span class="todo-count">${workspace.todos.length}</span> todos to
            complete
        </h2>
        <div class="add-new-task">
            <input class="regular-checkbox" type="checkbox" name="add-task" value="del">
            <input class="add-text-field" type="text" name="add-task-text" placeholder="Add a new task" minlength="3">
        </div>
    `;

    // Create todos
    workspace.todos.forEach(tod => {
        content.innerHTML += `
            <div class="todo-card">
                <input class="regular-checkbox" type="checkbox" name="add-task" value="del">
                <div class="card-content">
                    <h2>${tod.title}</h2>
                    <p>${tod.text}</p>
                    <div class="label-container">
                    </div>
                </div>
            </div>
        `

        let labelContainer = content.querySelectorAll(".label-container");
        let currentLabelContainer = labelContainer[labelContainer.length - 1];

        // Add tags
        tod.tags.forEach(tag => {
            let newTag = document.createElement("div");
            newTag.classList.add("label")
            newTag.classList.add(tag.color);
            newTag.textContent = tag.text;

            currentLabelContainer.append(newTag);
        });

    });

    // Project specific
    if (workspace.type == "project") {
        const headerTitle = content.querySelector("h1");
        headerTitle.style = `
            background-color: var(--highlight-${workspace.color});
            border: 6px solid var(--highlight-${workspace.color});
            border-radius: 8px;
        `
    }

    /*
    Actions
    */

    // Open popup for new task
    const popup = document.querySelector(".pop-up");
    const addTodoField = content.querySelector(".add-text-field");
    addTodoField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (addTodoField.value.length >= 3) {
                popup.classList.add("active");
                document.querySelector(".h1-input").value = addTodoField.value;
            }
        }
    });

    return content;
}

export { Workspace, createWorkspace };
