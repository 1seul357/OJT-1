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

      const textBox = document.createElement("div");
      textBox.className = "textBox"
      textBox.appendChild(text);
      this.section.appendChild(textBox);

      const imgArray = [Bear, Deer, Koala, Peng, Elephant, Fox, Sheep, Chick];
      const box = document.createElement("section");
      box.className = "imgBox";

      const answer = [];

      imgArray.forEach((src, i) => {
        const imgTag = document.createElement('img');
        imgTag.src = src;
        imgTag.addEventListener('click', function () {
          if (answer.includes(i)) {
              const index = answer.indexOf(i);
              if (index > -1) {
                answer.splice(index, 1);
            }
          } else {
            answer.push(i);
          }
        })
        box.appendChild(imgTag);
      });

      const button = document.createElement("button");
      button.innerText = "Next"
      button.addEventListener('click', function () {
        var flag = 0;
        answer.forEach((ans, i) => {
          if (ans != 0 && ans != 1 && ans != 6) {
            flag = 1;
          }
        })
        if (flag == 0) {
          alert("맞았습니다");
        } else {
          alert("틀렸습니다");
        }
      });
      this.section.appendChild(button);

      this.section.appendChild(box);
    }
  }