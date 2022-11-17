import "../css/Success.css";
import Img from "../assets/BackgroundImg.png";

export default class Success {
  constructor({ $target, minute, seconds }) {
    this.minute = minute;
    this.seconds = seconds;
    this.section = $target.querySelector("section");
    this.section.className = "successSection";
    this.render();
  }

  render() {
    const message = document.createElement("h3");
    message.innerText =
      "축하합니다! 모든 단계를 완료했습니다.\n\n\n\n\n\n 문제를 푸는데 걸리는 시간은 총 " +
      `${this.minute > 0 ? this.minute + "분 " : ""}` +
      `${this.seconds}` +
      "초입니다.";

    const img = document.createElement("img");
    img.src = Img;
    img.className = "image";

    this.section.appendChild(img);
    this.section.appendChild(message);
  }
}
