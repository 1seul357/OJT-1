import '../css/FirstLevel.css';
import Bear from "../assets/Bear.png";
import Chick from "../assets/Chick.png";
import Deer from "../assets/Deer.png";
import Elephant from "../assets/Elephant.png"
import Fox from "../assets/Fox.png"
import Koala from "../assets/Koala.png"
import Peng from "../assets/Peng.png"
import Sheep from "../assets/Sheep.png"


export default class FirstLevel {
    constructor({ $target }) {
      this.section = document.createElement("section");
      this.section.className = "firstSection";
      $target.appendChild(this.section);
      this.render();
    }
  
    render() {
      this.section.innerHTML = "";

      const text = document.createElement("h3");
      text.className = "mainText"
      text.innerText = "한 글자인 동물을 모두 선택해주세요.";
      this.section.appendChild(text);

      const imgTag = document.createElement('img');
      imgTag.src = Chick;

      this.section.appendChild(imgTag);
    }
  }