import Label from "./label";
import Todo from "./todo";

class Workspace {
    constructor(name) {
        this._name = name;
        this._title = name + "'s";
        this._todos = [];
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
}

function createWorkspace(workspace) {
    const content = document.createElement("div");

    content.innerHTML = `
        <h1 class="todo-title">Today's Todos</h1>
        <h2 class="todo-desc">
            You've got <span class="todo-count">5</span> todos to
            complete
        </h2>
        <div class="add-new-task">
            <input class="regular-checkbox" type="checkbox" name="add-task" value="del">
            <input class="add-text-field" type="text" name="add-task-text" placeholder="Add a new task">
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

        let labelContainer = document.querySelectorAll(".label-container");
        let currentLabelContainer = labelContainer[labelContainer.length - 1];
        console.log(currentLabelContainer)

        // Add tags
        tod.tags.forEach(tag => {
            let newTag = document.createElement("div");
            newTag.classList.add("label")
            newTag.classList.add(tag.color);

            currentLabelContainer.append(newTag);
            console.log("e")
        });

    });

    return content;
}

export { Workspace, createWorkspace };