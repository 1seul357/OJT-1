import "../css/FirstLevel.css";
import "../css/Container.css";
import Modal from "../components/Modal";
import Container from "../components/Container";
import Button from "../components/Button";
import Check from "../assets/Check.png";

export default class FirstLevel {
  constructor({ $target, loadPage, data }) {
    this.data = data;
    this.section = $target.querySelector(".section");
    this.loadPage = loadPage;
    this.render();
  }

  render() {
    const loadPage = this.loadPage;
    const animal = this.data.animal;
    const problemAnswer = this.data.problemAnswer;

    const data = {
      message: this.data.message,
      text: this.data.text,
      profile: this.data.profile.img,
    };
    new Container(data);

    const box = document.createElement("section");
    box.className = "imgBox";

    animal.forEach((src, i) => {
      const imgContainer = document.createElement("div");
      imgContainer.className = "imgContainer";

      const imgTag = document.createElement("img");
      imgTag.src = src;
      imgTag.className = "imgTag";
      imgContainer.appendChild(imgTag);

      const check = document.createElement("img");
      check.src = Check;
      imgContainer.appendChild(check);
      check.className = "unCheck";

      imgTag.addEventListener("click", function () {
        imgContainer.dataset.index = i;
        imgContainer.classList.contains("clickImg")
          ? imgContainer.classList.remove("clickImg")
          : imgContainer.classList.add("clickImg");
        imgContainer.classList.contains("clickImg")
          ? (check.className = "check")
          : (check.className = "unCheck");
      });
      box.appendChild(imgContainer);
    });

    const loadModal = async () => {
      const answer = [...document.querySelectorAll(".clickImg")].map((el) =>
        Number(el.dataset.index)
      );
      const isAnswer =
        answer.length === problemAnswer.length &&
        answer.every((ans) => problemAnswer.includes(ans)); // 사용자가 선택한 문항 수와 정답 수가 같고, 모든 값 (2, 3, 6)이 같으면 true
      const data = {
        answer: 1,
        info: "틀렸습니다!",
        message: "세 마리의 동물을 선택해야 합니다.",
      };
      if (isAnswer) {
        data.answer = 0;
        data.info = "정답입니다!";
        data.message = "한 글자인 동물은 양, 곰, 말 모두 세 마리입니다.";
      }
      const modal = new Modal(data);
      await modal.render();
      loadPage();
    };

    new Button(loadModal);

    this.section.appendChild(box);
  }
}
