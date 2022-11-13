import "../css/ThirdLevel.css";
import Modal from "../components/Modal";
import Blue from "../assets/Blue.png";
import Green from "../assets/Green.png";
import DarkGreen from "../assets/DarkGreen.png";
import Grey from "../assets/Grey.png";
import Orange from "../assets/Orange.png";
import Pink from "../assets/Pink.png";
import Yellow from "../assets/Yellow.png";
import Red from "../assets/Red.png";
import SkyBlue from "../assets/SkyBlue.png";

export default function ThirdLevel({ $target, loadPage }) {
  this.section = document.createElement("section");
  this.section.className = "thirdSection";
  this.loadPage = loadPage;
  $target.appendChild(this.section);

  this.render = () => {
    this.section.innerHTML = "";
    const loadPage = this.loadPage;

    const text = document.createElement("h3");
    text.className = "mainText";
    text.innerText = "5개의 원을 드래그해서 박스에 담아주세요.";
    this.section.appendChild(text);

    const textBox = document.createElement("div");
    textBox.className = "textBox";
    textBox.appendChild(text);
    this.section.appendChild(textBox);

    const container = document.createElement("div");
    container.className = "flexContainer";
    this.section.appendChild(container);

    const box = document.createElement("div");
    box.className = "box";
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
        circle.dataset.index = i;
      });
      box.appendChild(circle);
    });
    container.appendChild(box);
    container.appendChild(circleBox);

    circleBox.addEventListener("dragenter", (e) => {
      console.log("드래그");
    });

    const button = document.createElement("button");
    button.innerText = "Next";

    this.section.appendChild(button);
  };
  this.render();
}
