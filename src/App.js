import FirstLevel from "./pages/FirstLevel";
import SecondLevel from "./pages/SecondLevel";
import ThirdLevel from "./pages/ThirdLevel";
import "./css/App.css";
import "../style.css";

export default function App($target) {
  const loadPage = (level) => {
    $target.innerHTML = "";
    if (level == 2) {
      new SecondLevel({ $target, loadPage });
    }
    if (level === 3) {
      new ThirdLevel({ $target, loadPage });
    }
  };
  new FirstLevel({ $target, loadPage });
}
