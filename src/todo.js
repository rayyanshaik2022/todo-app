import Label from "./label";

class Todo {
    constructor(title, text, tags=null) {
        this._title = title;
        this._text = text;

        this._tags = tags ? tags : [];
        this._exists = true;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get text() {
        return this._text;
    }

    set text(newText) {
        this._text = newText;
    }

    get tags() {
        return this._tags;
    }

    set tags(newTags) {
        this._tags = newTags;
    }

    addTag(newTag) {
        this._tags.push(newTag);
    }

    get exists() {
        return this._exists;
    }

    set exists(newExists) {
        this._exists = newExists;
    }
}

export default Todo;