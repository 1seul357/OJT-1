import '../css/FirstLevel.css';
import Bear from "../assets/Bear.png";
import Chick from "../assets/Chick.png";
import Deer from "../assets/Deer.png";

export default class FirstLevel {
    constructor({ $target }) {
      this.section = document.createElement("section");
      $target.appendChild(this.section);
      this.div = document.createElement("section");
      this.div.className = "box";
      this.render();
    }
  
    render() {
      this.div.innerHTML = "";
      const text = document.createElement("h3");
      text.className = "mainText"
      text.innerText = "한 글자인 동물을 모두 선택해주세요.";
      this.div.appendChild(text);
      const imgTag = document.createElement('img');
      imgTag.src = Chick;
      this.section.appendChild(this.div);
      this.div.appendChild(imgTag);
    }
  }