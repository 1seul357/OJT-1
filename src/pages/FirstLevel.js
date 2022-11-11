import '../css/FirstLevel.css';
import SecondLevel from './SecondLevel';
import Modal from '../components/Modal';
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
      this.target = $target
      this.render();
      $target.appendChild(this.section);
    }

    render() {
      const target = this.target;
      this.section.innerHTML = "";
      const text = document.createElement("h3");
      text.className = "mainText";
      text.innerText = "한 글자인 동물을 모두 선택해주세요.";

      const textBox = document.createElement("div");
      textBox.className = "textBox";
      textBox.appendChild(text);
      this.section.appendChild(textBox);

      const problemAnswer = [2, 3, 6];
      const imgArray = [Peng, Koala, Bear, Deer, Elephant, Fox, Sheep, Chick];
      const box = document.createElement("section");
      box.className = "imgBox";
    
      imgArray.forEach((src, i) => {
        const imgTag = document.createElement('img');
        imgTag.src = src;
        imgTag.addEventListener('click', function () {
          imgTag.dataset.index = i;
          imgTag.className = imgTag.className ? "" : "selectedImg"; // className이 있으면 "", 없으면 selectedImg로 설정해서 이미지의 opacity 조절
        })
        box.appendChild(imgTag);
      });

      const loadPage = () => {
        this.section.remove()
        const secondLevel = new SecondLevel({
          target
        });
      }

      const button = document.createElement("button");
      button.innerText = "Next";
      button.addEventListener('click', async function () {
        const answer = [...box.querySelectorAll(".selectedImg")].map(el => Number(el.dataset.index));
        const isAnswer = answer.length === problemAnswer.length && answer.every(ans=>(problemAnswer.includes(ans)));  // 사용자가 선택한 문항 수와 정답 수가 같고, 모든 값 (2, 3, 6)이 같으면 true
        const data = {
          answer: 1,
          info: "틀렸습니다!",
          message: "세 마리의 동물을 선택해야 합니다."
        };
        if (isAnswer) {
            data.answer= 0;
            data.info= "정답입니다!";
            data.message= "한 글자인 동물은 양, 곰, 말 모두 세 마리입니다."
        } 
      const modal =  new Modal(data, loadPage);
      await modal.render();
      isAnswer && loadPage()
      });

      this.section.appendChild(button);
      this.section.appendChild(box);
      
    }
  }
