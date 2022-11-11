export default class SecondLevel {
    constructor({ target }) {
        this.section = document.createElement("section");
        this.section.className = "secondSection";
        this.render();
        target.appendChild(this.section);
    }

    render() {
        this.section.innerHTML = "";
        const text = document.createElement("h3");
        text.className = "mainText";
        text.innerText = "네모 칸을 7개 이상 색칠해주세요.";
        this.section.appendChild(text);
    }
}