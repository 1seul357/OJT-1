import Modal from "../components/Modal";

export default class ThirdLevel {
    constructor({ $target, loadPage }) {
        this.section = document.createElement("section");
        this.section.className = "thirdLevel";
        this.loadPage = loadPage;
        this.render();
        $target.appendChild(this.section);
    }
    
    render() {
    }
}