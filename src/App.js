import FirstLevel from './pages/FirstLevel';
import './css/App.css';

export default class App {
  constructor($target) {
    const firstLevel = new FirstLevel({
      $target
    });
  }
}