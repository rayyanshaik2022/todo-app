class Label {
    constructor(text, color=null) {
        this._text = text;

        this._color = color;
        if (color == null){
            this._color = this.generateColor();
        }
        
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

    getTextID() {
        let val = 0;
        for (let i = 0; i < this._text.length; i++ ) {
            val += this._text.charCodeAt(i);
        }

        return val;
    }

    generateColor() {
        let colors = ["red", "purple", "green", "blue", "yellow", "orange"];
        return colors[this.getTextID() % 6];
    }
}

export default Label;