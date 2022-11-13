import "../css/SecondLevel.css";
import Modal from "../components/Modal";

export default function SecondLevel({ $target, loadPage }) {
  this.section = document.createElement("section");
  this.section.className = "secondSection";
  this.loadPage = loadPage;
  $target.appendChild(this.section);

  this.render = () => {
    this.section.innerHTML = "";
    const loadPage = this.loadPage;

    const text = document.createElement("h3");
    text.className = "mainText";
    text.innerText = "네모 칸을 7개 이상 색칠해주세요.";
    this.section.appendChild(text);

    const textBox = document.createElement("div");
    textBox.className = "textBox";
    textBox.appendChild(text);
    this.section.appendChild(textBox);

    const box = document.createElement("section");
    box.className = "box";
    for (let index = 0; index < 14; index++) {
      const container = document.createElement("div");
      container.className = "container";
      container.addEventListener("click", function () {
        container.className =
          container.className === "container"
            ? "selectedContainer"
            : "container";
      });
      box.appendChild(container);
    }

    const button = document.createElement("button");
    button.innerText = "Next";
    button.addEventListener("click", async function () {
      const isAnswer = box.querySelectorAll(".selectedContainer");
      const data = {
        level: 2,
        answer: 1,
        info: "틀렸습니다!",
        message: "7개 이상 색칠해주세요.",
      };
      if (isAnswer.length >= 7) {
        data.answer = 0;
        data.info = "정답입니다!";
        data.message = "다음 단계로 넘어갈 때까지 기다려주세요.";
      }
      const modal = await new Modal(data, loadPage);
      modal.render();
    });

    this.section.appendChild(button);
    this.section.appendChild(box);
  };
  this.render();
}
