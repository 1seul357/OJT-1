import "../css/Container.css";

export default class Container {
    constructor(data) {
        this.data = data;
        this.section = document.querySelector(".section");
        this.section.className = "section";
        this.render();
        document.querySelector(".app").appendChild(this.section);
    }
    render() {
        const text = document.createElement("h3");
        const text2 = document.createElement("h3");
        text2.className = "text";
        text.innerText = this.data.text;
        text2.innerText = this.data.text2;
    
        const textBox = document.createElement("div");
        textBox.className = "textBox";
        textBox.appendChild(text2);
        textBox.appendChild(text);
        this.section.appendChild(textBox);
    }
}