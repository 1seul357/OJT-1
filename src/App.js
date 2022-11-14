import FirstLevel from "./pages/FirstLevel";
import SecondLevel from "./pages/SecondLevel";
import ThirdLevel from "./pages/ThirdLevel";
import Success from "./pages/Success";
import "./css/App.css";
import "../style.css";

export default function App($target) {
  let level = 1;
  const start = new Date();

  const loadPage = () => {
    $target.innerHTML = "";
    if(level === 1) {
      new FirstLevel({ $target, loadPage })
    };
    if (level == 2) {
      new SecondLevel({ $target, loadPage });
    }
    if (level === 3) {
      new ThirdLevel({ $target, loadPage });
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
  // const data = [{level:1,answer:[1],animal:["bear","chick"],directive:"병아리를 고르세요"},{},{}]

  loadPage();
}
