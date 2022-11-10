import "../css/Modal.css";
import Chicken from "../assets/Chicken.png";
import Frog from "../assets/Frog.png";

export default class Modal {
    constructor(data) {
        this.data = data;
        this.modalWrapper = document.createElement("section");
        this.modalWrapper.className = "modalWrapper";

        document.querySelector(".app").appendChild(this.modalWrapper);
        this.render();
    }

    render() {
        const img = document.createElement("img");
        img.className = "modalImg";
        img.src = this.data.answer == 0 ? Frog : Chicken;
        this.modalWrapper.appendChild(img);

        const info = document.createElement("h2");
        info.innerText = this.data.info;
        this.modalWrapper.appendChild(info);

        const message = document.createElement("h3");
        info.className = "modalMessage";
        message.innerText = this.data.message;
        this.modalWrapper.appendChild(message);
    }
} 