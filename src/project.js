import { Workspace } from "./workspace";

class Project extends Workspace {
    constructor(name, color) {
        super(name);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    get title() {
        return this._name;
    }
}

function createProject(project) {

    const projectElement = document.createElement("div");
    projectElement.classList.add("project", "btn-group");

    console.log(project)

    projectElement.innerHTML = `
        <div class="proj-color ${project.color}"></div>
        <div class="proj-title">${project.name}</div>
    `

    projectElement.dataset.project = project.name;

    return projectElement;

}

export {Project, createProject};