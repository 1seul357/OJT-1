import '../css/Success.css';
import Img from '../assets/BackgroundImg.png';
import Element, { createElement } from '../util/Element';

export default class Success {
    constructor({ $target, start }) {
        const end = new Date();
        const time = end - start;
        this.minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((time % (1000 * 60)) / 1000);
        this.section = new Element($target.querySelector('section')).addClass('successSection');
        this.render();
    }

    render() {
        createElement('img').src(Img).addClass('image').appendTo(this.section);
        createElement('h3')
            .innerText(
                '축하합니다! 모든 단계를 완료했습니다.\n\n\n\n\n\n 문제를 푸는데 걸리는 시간은 총 ' +
                    `${this.minute > 0 ? this.minute + '분 ' : ''}` +
                    `${this.seconds}` +
                    '초입니다.'
            )
            .appendTo(this.section);
    }
}
