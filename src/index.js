console.log("test")

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    get todos() {
        return this.todos
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}


let projects = [];
let todos = [];