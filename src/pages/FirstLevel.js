import "../css/FirstLevel.css";
import "../css/Container.css";
import Modal from "../components/Modal";
import Container from "../components/Container";
import Button from "../components/Button";

export default function FirstLevel({ $target, loadPage, data }) {
  this.data = data;
  this.section = $target.querySelector(".section");
  this.loadPage = loadPage;

  this.render = () => {
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
      const imgTag = document.createElement("img");
      imgTag.src = src;
      imgTag.addEventListener("click", function () {
        imgTag.dataset.index = i;
        imgTag.className = imgTag.className ? "" : "selectedImg"; // className이 있으면 "", 없으면 selectedImg로 설정해서 이미지의 opacity 조절
      });
      box.appendChild(imgTag);
    });

    const loadModal = async () => {
      const answer = [...box.querySelectorAll(".selectedImg")].map((el) =>
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

    new Button($target, loadModal);

    this.section.appendChild(box);
  };
  this.render();
}
