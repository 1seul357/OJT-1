import Index from './pages/Index';
import FirstLevel from './pages/FirstLevel';
import SecondLevel from './pages/SecondLevel';
import ThirdLevel from './pages/ThirdLevel';
import Success from './pages/Success';

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
        directive: [{ text: '한 글자', className: 'text' }, { text: '인 동물을 모두 선택해주세요.' }],
        rightMessage: '한 글자인 동물은 양, 개, 말 모두 세 마리입니다.',
        wrongMessage: '세 마리의 동물을 선택해야 합니다.'
    },
    {
        level: 2,
        count: 10,
        directive: [{ text: '10개 이상', className: 'text' }, { text: '의 네모 칸을 색칠해주세요.' }],
        rightMessage: '다음 단계로 넘어갈 때까지 기다려주세요.',
        wrongMessage: '10개 이상 색칠해주세요.'
    },
    {
        level: 3,
        count: 4,
        circle: [Red, Pink, Yellow, SkyBlue, Blue, Green, Grey, Orange, DarkGreen],
        directive: [{ text: '4개', className: 'text' }, { text: '의 원을 드래그해서 박스에 담아주세요.' }],
        rightMessage: '모든 단계를 완료했습니다.',
        wrongMessage: '박스에 4개의 원을 담아주세요.'
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
