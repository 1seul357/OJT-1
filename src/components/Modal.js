import "../css/Modal.css";
import O from "../assets/O.png";
import X from "../assets/X.png";

export default class Modal {
  constructor(data, loadPage) {
    this.data = data;
    this.loadPage = loadPage;
    this.modal = document.createElement("section");
    this.modal.className = "modal";
    this.render();
    document.querySelector(".app").appendChild(this.modal);
  }

  render() {
    const loadPage = this.loadPage;
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

    img.onload = function () {
      modalWrapper.appendChild(img);
      modalWrapper.appendChild(info);
      modalWrapper.appendChild(message);
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        this.modal.remove();
        if (this.data.answer === 0) {
          if (this.data.level === 1) {
            resolve(loadPage(2));
          }
          if (this.data.level === 2) {
            resolve(loadPage(3));
          }
        }
      }, 4000);
    });
  }
}
