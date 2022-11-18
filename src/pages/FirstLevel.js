import '../css/FirstLevel.css';
import '../css/Container.css';
import Container from '../components/Container';
import Check from '../assets/Check.png';
import { makeSubmitButton } from '../util/util';
import Element, { createElement } from '../util/Element';

export default class FirstLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = new Element($target.querySelector('.section'));
    }

    render() {
        const animal = this.data.animal;
        const problemAnswer = this.data.problemAnswer;
        const data = this.data;
        new Container(data.directive);

        const box = createElement('section').addClass('imgBox').appendTo(this.section);

        animal.forEach((src, i) => {
            const imgContainer = createElement('div').addClass('imgContainer').appendTo(box);

            const imgTag = createElement('img')
                .src(src)
                .addClass('imgTag')
                .appendTo(imgContainer)
                .on('click', () => {
                    console.log('cl');
                    imgContainer.setData('index', i);
                    if (imgContainer.isContainClass('clickImg')) {
                        imgContainer.removeClass('clickImg');
                        check.addClass('unCheck').removeClass('check');
                    } else {
                        imgContainer.addClass('clickImg');
                        check.addClass('check').removeClass('unCheck');
                    }
                });

            const check = createElement('img').src(Check).appendTo(imgContainer).addClass('unCheck');
        });

        return makeSubmitButton(
            () => {
                const answer = this.section.selectAll('.clickImg').map(el => Number(el.getData('index')));
                const isAnswer =
                    answer.length === problemAnswer.length && answer.every(ans => problemAnswer.includes(ans)); // 사용자가 선택한 문항 수와 정답 수가 같고, 모든 값 (2, 3, 6)이 같으면 true
                return isAnswer;
            },
            data.rightMessage,
            data.wrongMessage
        );
    }
}
