import FirstLevel from "./pages/FirstLevel";
import SecondLevel from "./pages/SecondLevel";
import ThirdLevel from "./pages/ThirdLevel";
import Success from "./pages/Success";
import Bear from "./assets/Bear.png";
import Chick from "./assets/Chick.png";
import Deer from "./assets/Deer.png";
import Elephant from "./assets/Elephant.png";
import Fox from "./assets/Fox.png";
import Koala from "./assets/Koala.png";
import Peng from "./assets/Peng.png";
import Sheep from "./assets/Sheep.png";
import "./css/App.css";
import "../style.css";

export default function App($target) {
  let level = 1;
  const start = new Date();

  const loadPage = () => {
    $target.innerHTML = "";
    if(level === 1) {
      const data = { animal:[Peng, Koala, Bear, Deer, Elephant, Fox, Sheep, Chick], problemAnswer: [2, 3, 6], text: "한 글자", message: "인 동물을 모두 선택해주세요." };
      new FirstLevel({ $target, loadPage, data });
    };
    if (level == 2) {
      const data = { text: "7개 이상", message: "의 네모 칸을 색칠해주세요." };
      new SecondLevel({ $target, loadPage, data });
    }
    if (level === 3) {
      const data = { text: "3개", message: "의 원을 드래그해서 박스에 담아주세요." };
      new ThirdLevel({ $target, loadPage, data });
    }
    if (level === 4) {
      const end = new Date();
      let time = end - start;
      const minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);

      new Success({ $target, loadPage, minute, seconds });
    }
    level ++;
  };

  loadPage();
}
