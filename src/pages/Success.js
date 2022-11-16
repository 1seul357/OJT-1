import "../css/Success.css";
import Img from "../assets/BackgroundImg.png";

export default function Success({ $target, minute, seconds }) {
  this.section = $target.querySelector("section");
  this.section.className = "successSection";

  this.render = () => {
    const message = document.createElement("h3");
    message.innerText =
      "축하합니다! 모든 단계를 완료했습니다.\n\n\n\n\n\n 문제를 푸는데 걸리는 시간은 총 " +
      `${minute > 0 ? minute + "분 " : ""}` +
      `${seconds}` +
      "초입니다.";

    const img = document.createElement("img");
    img.src = Img;
    img.className = "image";
    this.section.appendChild(message);
    this.section.appendChild(img);
  };
  this.render();
}
