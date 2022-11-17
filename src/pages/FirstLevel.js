import '../css/FirstLevel.css';
import '../css/Container.css';
import Container from '../components/Container';
import Check from '../assets/Check.png';
import { makeSubmitButton } from '../util/util';

export default class FirstLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = $target.querySelector('.section');
    }

    render() {
        const animal = this.data.animal;
        const problemAnswer = this.data.problemAnswer;
        const data = this.data;
        new Container(data.directive);

        const box = document.createElement('section');
        box.className = 'imgBox';

        animal.forEach((src, i) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'imgContainer';

            const imgTag = document.createElement('img');
            imgTag.src = src;
            imgTag.className = 'imgTag';
            imgContainer.appendChild(imgTag);

            const check = document.createElement('img');
            check.src = Check;
            imgContainer.appendChild(check);
            check.className = 'unCheck';

            imgTag.addEventListener('click', function () {
                imgContainer.dataset.index = i;
                imgContainer.classList.contains('clickImg')
                    ? imgContainer.classList.remove('clickImg')
                    : imgContainer.classList.add('clickImg');
                imgContainer.classList.contains('clickImg')
                    ? (check.className = 'check')
                    : (check.className = 'unCheck');
            });
            box.appendChild(imgContainer);
        });

        this.section.appendChild(box);
        return makeSubmitButton(
            () => {
                const answer = [...document.querySelectorAll('.clickImg')].map(el => Number(el.dataset.index));
                const isAnswer =
                    answer.length === problemAnswer.length && answer.every(ans => problemAnswer.includes(ans)); // 사용자가 선택한 문항 수와 정답 수가 같고, 모든 값 (2, 3, 6)이 같으면 true
                return isAnswer;
            },
            data.rightMessage,
            data.wrongMessage
        );
    }
}
