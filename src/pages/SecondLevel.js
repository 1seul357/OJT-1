import "../css/SecondLevel.css";
import Modal from "../components/Modal";

export default class SecondLevel {
    constructor({ $target }) {
        this.section = document.createElement("section");
        this.section.className = "secondSection";
        this.render();
        $target.appendChild(this.section);
    }

    render() {
        this.section.innerHTML = "";
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
            container.className = "container"
            container.addEventListener('click', function () {
                container.className = container.className === "container" ? "selectedContainer" : "container";
            })
            box.appendChild(container);
        }
        const loadPage = () => {
            this.section.remove()
            const secondLevel = new SecondLevel({
              target
            });
          }
        const button = document.createElement("button");
        button.innerText = "Next";
        button.addEventListener('click', function () {
            const isAnswer = box.querySelectorAll(".selectedContainer");
            const data = {
                answer: 1,
                info: "틀렸습니다!",
                message: "7개 이상 색칠해주세요."
            }
            if (isAnswer.length >= 7) {
                data.answer = 0;
                data.info = "정답입니다!";
                data.message= "다음 단계로 넘어갈 때까지 기다려주세요."
            }
            const modal =  new Modal(data, loadPage);
        })

        this.section.appendChild(button);
        this.section.appendChild(box);
    }
}