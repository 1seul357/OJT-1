import "../css/Modal.css";
import O from "../assets/O.png";
import X from "../assets/X.png";

export default class Modal {
    constructor(data) {
        this.data = data;
        this.modal = document.createElement("section");
        this.modal.className = "modal";
        this.render();
        document.querySelector(".app").appendChild(this.modal);
    }

    render() {
        const modalWrapper = document.createElement("section");
        modalWrapper.className = "modalWrapper";
        this.modal.appendChild(modalWrapper);

        const img = document.createElement("img");
        img.className = "modalImg";
        img.src = this.data.answer == 0 ? O : X;

        const info = document.createElement("h2");
        info.innerText = this.data.info;
        info.className = "modalInfo";

        const message = document.createElement("h3");
        message.innerText = this.data.message;
        message.className = "modalMessage";

        if (this.data.answer === 1) {
            setTimeout(() => {
                this.modal.remove();
            }, 4000);
        }

        img.onload = function() {
            modalWrapper.appendChild(img);
            modalWrapper.appendChild(info);
            modalWrapper.appendChild(message);
        };
    }
} 