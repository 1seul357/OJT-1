import '../css/ThirdLevel.css';
import '../css/Container.css';
import Container from '../components/Container';
import { makeSubmitButton } from '../util/util';

export default class ThirdLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = $target.querySelector('section');
    }

    render() {
        const circleArray = this.data.circle;
        const data = this.data;
        new Container(data.directive);

        const container = document.createElement('div');
        container.className = 'flexContainer';

        const box = document.createElement('div');
        box.className = 'boxContainer';

        const circleBox = document.createElement('div');
        circleBox.className = 'circleBox';

        circleArray.forEach((src, i) => {
            const circle = document.createElement('img');
            circle.src = src;
            circle.className = 'circle';

            circle.addEventListener('drag', function (e) {
                e.preventDefault();
                circle.classList.add('dragging');
            });

            circle.addEventListener('dragend', function () {
                circle.classList.remove('dragging');
            });

            box.appendChild(circle);
            circle.onload = function () {
                container.appendChild(circleBox);
            };
        });

        circleBox.addEventListener('drop', function (e) {
            e.preventDefault();
            const count = document.querySelectorAll('.dropCircle');
            if (count.length < data.count) {
                const dropCircle = document.querySelector('.dragging');
                dropCircle.className = 'dropCircle';
                dropCircle.style.left = e.clientX - circleBox.offsetLeft - dropCircle.clientWidth / 2 + 'px';
                dropCircle.style.top = e.clientY - circleBox.offsetTop - dropCircle.clientHeight / 2 + 'px';
                circleBox.appendChild(dropCircle);
            }
        });

        circleBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        container.appendChild(box);
        this.section.appendChild(container);
        return makeSubmitButton(
            () => document.querySelectorAll('.dropCircle').length === data.count,
            data.rightMessage,
            data.wrongMessage
        );
    }
}
