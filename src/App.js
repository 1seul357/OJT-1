import FirstLevel from './pages/FirstLevel';
import SecondLevel from './pages/SecondLevel';
import './css/App.css';
import '../style.css';

export default class App {
  constructor($target) {
    $target.innerHTML = ''
    const firstLevel = new FirstLevel({
      $target
    });
  }
}

