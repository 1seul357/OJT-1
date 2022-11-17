import Index from './pages/Index';
import FirstLevel from './pages/FirstLevel';
import SecondLevel from './pages/SecondLevel';
import ThirdLevel from './pages/ThirdLevel';
import Success from './pages/Success';
import LocalStorage from './util/LocalStorage';

import Dog from './assets/Dog.png';
import Chick from './assets/Chick.png';
import Deer from './assets/Deer.png';
import Elephant from './assets/Elephant.png';
import Fox from './assets/Fox.png';
import Koala from './assets/Koala.png';
import Peng from './assets/Peng.png';
import Sheep from './assets/Sheep.png';
import Blue from './assets/Blue.png';
import Green from './assets/Green.png';
import DarkGreen from './assets/DarkGreen.png';
import Grey from './assets/Grey.png';
import Orange from './assets/Orange.png';
import Pink from './assets/Pink.png';
import Yellow from './assets/Yellow.png';
import Red from './assets/Red.png';
import SkyBlue from './assets/SkyBlue.png';
import './css/App.css';
import '../style.css';
const metaData = [
    {
        level: 1,
        animal: [Peng, Koala, Deer, Elephant, Fox, Sheep, Chick, Dog],
        problemAnswer: [2, 5, 7],
        text: '한 글자',
        message: '인 동물을 모두 선택해주세요.'
    },
    {
        level: 1,
        animal: [Peng, Koala, Deer, Elephant, Fox, Sheep, Dog, Chick],
        problemAnswer: [2, 5, 6],
        text: '한 글자',
        message: '인 동물을 모두 선택해주세요.'
    },
    {
        level: 2,
        text: '7개 이상',
        message: '의 네모 칸을 색칠해주세요.'
    },
    {
        level: 3,
        circle: [Red, Pink, Yellow, SkyBlue, Blue, Green, Grey, Orange, DarkGreen],
        text: '3개',
        message: '의 원을 드래그해서 박스에 담아주세요.'
    }
];
const Components = [FirstLevel, SecondLevel, ThirdLevel];
export default class App {
    constructor($target) {
        this.$target = $target;
        this.section = document.createElement('section');
        this.section.className = 'section';
        $target.appendChild(this.section);
    }
    async start() {
        const $target = this.$target;
        const start = new Date();

        const index = new Index({ $target });
        await index.render();
        this.clear();
        for (const data of metaData) {
            const Component = Components[data.level - 1];
            const instance = new Component({ $target, data });
            await instance.render();
            this.clear();
        }

        new Success({ $target, start });
    }
    clear() {
        this.section.innerHTML = '';
    }
}
