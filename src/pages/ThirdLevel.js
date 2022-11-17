import "../css/ThirdLevel.css";
import "../css/Container.css";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Container from "../components/Container";

export default class ThirdLevel {
  constructor({ $target, loadPage, data }) {
    this.data = data;
    this.section = $target.querySelector("section");
    this.loadPage = loadPage;
    this.render();
  }

  render() {
    const loadPage = this.loadPage;
    const circleArray = this.data.circle;
    const data = {
      message: this.data.message,
      text: this.data.text,
      profile: this.data.profile.img,
    };
    new Container(data);

    const container = document.createElement("div");
    container.className = "flexContainer";

    const box = document.createElement("div");
    box.className = "boxContainer";

    const circleBox = document.createElement("div");
    circleBox.className = "circleBox";

    circleArray.forEach((src, i) => {
      const circle = document.createElement("img");
      circle.src = src;
      circle.className = "circle";

      circle.addEventListener("drag", function (e) {
        e.preventDefault();
        circle.classList.add("dragging");
      });

      circle.addEventListener("dragend", function () {
        circle.classList.remove("dragging");
      });

      box.appendChild(circle);
      circle.onload = function () {
        container.appendChild(circleBox);
      };
    });

    circleBox.addEventListener("drop", function (e) {
      e.preventDefault();
      const count = document.querySelectorAll(".dropCircle");
      if (count.length <= 2) {
        const dropCircle = document.querySelector(".dragging");
        dropCircle.className = "dropCircle";
        dropCircle.style.left =
          e.clientX - circleBox.offsetLeft - dropCircle.clientWidth / 2 + "px";
        dropCircle.style.top =
          e.clientY - circleBox.offsetTop - dropCircle.clientHeight / 2 + "px";
        circleBox.appendChild(dropCircle);
      }
    });

    circleBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    const loadModal = async () => {
      const count = document.querySelectorAll(".dropCircle");
      const data = {
        level: 4,
        answer: 1,
        info: "틀렸습니다!",
        message: "박스에 3개의 원을 담아주세요.",
      };
      if (count.length === 3) {
        data.answer = 0;
        data.info = "정답입니다!";
        data.message = "모든 단계를 완료했습니다.";
      }
      const modal = new Modal(data);
      await modal.render();
      loadPage();
    };

    new Button(loadModal);

    container.appendChild(box);
    this.section.appendChild(container);
  }
}
