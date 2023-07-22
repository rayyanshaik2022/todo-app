class Label {
    constructor(text, color="red") {
        this._text = text;
        this._color = color;
    }

    get text() {
        return this._text
    };

    set text(newText) {
        this._text = newText
    };

    get color() {
        return this._color;
    }

    set color(newColor) {
        return this._color;
    }
}

export default Label;