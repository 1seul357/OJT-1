import "../css/ThirdLevel.css";
import "../css/Container.css";
import Modal from "../components/Modal";
import Container from "../components/Container";
import Blue from "../assets/Blue.png";
import Green from "../assets/Green.png";
import DarkGreen from "../assets/DarkGreen.png";
import Grey from "../assets/Grey.png";
import Orange from "../assets/Orange.png";
import Pink from "../assets/Pink.png";
import Yellow from "../assets/Yellow.png";
import Red from "../assets/Red.png";
import SkyBlue from "../assets/SkyBlue.png";

export default function ThirdLevel({ $target, loadPage, data }) {
  this.data = data;
  this.section = document.createElement("section");
  this.section.className = "section";
  this.loadPage = loadPage;
  $target.appendChild(this.section);

  this.render = () => {
    this.section.innerHTML = "";
    const loadPage = this.loadPage;

    const data = {
      message: this.data.message,
      text: this.data.text
    };
    new Container(data);

    const container = document.createElement("div");
    container.className = "flexContainer";
    this.section.appendChild(container);

    const box = document.createElement("div");
    box.className = "boxContainer";
    const circleArray = [
      Red,
      Pink,
      Yellow,
      SkyBlue,
      Blue,
      Green,
      Grey,
      Orange,
      DarkGreen,
    ];

    const circleBox = document.createElement("div");
    circleBox.className = "circleBox";

    circleArray.forEach((src, i) => {
      const circle = document.createElement("img");
      circle.src = src;
      circle.className = "circle";
      circle.addEventListener("drag", function () {
        circle.classList.add("dragging");
        circle.dataset.index = i;
      });
      box.appendChild(circle);
      container.appendChild(box);
      circle.onload = function () {
        container.appendChild(circleBox);
      }
    });

    circleBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    circleBox.addEventListener("drop", function (e) {
      e.preventDefault();
      const count = document.querySelectorAll(".dropCircle");
      if (count.length <= 2) {
        const dropCircle = document.querySelector(".dragging");
        dropCircle.className = "dropCircle"
        circleBox.appendChild(dropCircle);
      }
    });

    const button = document.createElement("button");
    button.innerText = "Next";
    button.addEventListener("click", async function () {
      const count = document.querySelectorAll(".dropCircle");
      const data = {
        level: 4,
        answer: 1,
        info: "틀렸습니다!",
        message: "박스에 원을 3개만 담아주세요."
      }
      if (count.length === 3) {
        data.answer = 0;
        data.info = "정답입니다!";
        data.message = "모든 단계를 완료했습니다.";
      }
      const modal = new Modal(data);
      await modal.render();
      loadPage();
    })

    this.section.appendChild(button);
  };
  this.render();
}
