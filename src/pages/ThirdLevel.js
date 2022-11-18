import '../css/ThirdLevel.css';
import '../css/Container.css';
import Container from '../components/Container';
import { makeSubmitButton } from '../util/util';
import Element, { createElement } from '../util/Element';

export default class ThirdLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = new Element($target.querySelector('section'));
    }

    render() {
        const circleArray = this.data.circle;
        const data = this.data;
        new Container(data.directive);

        const container = createElement('div').addClass('flexContainer');

        const box = createElement('div').addClass('boxContainer');

        const circleBox = createElement('div').addClass('circleBox');

        circleArray.forEach((src, i) => {
            const circle = createElement('img')
                .src(src)
                .addClass('circle')
                .on('drag', e => {
                    e.preventDefault();
                    circle.addClass('dragging');
                })
                .on('dragend', () => circle.removeClass('dragging'))
                .on('load', () => container.append(circleBox))
                .appendTo(box);
        });

        circleBox.on('drop', e => {
            e.preventDefault();
            const count = document.querySelectorAll('.dropCircle');
            if (count.length < data.count) {
                const dropCircle = document.querySelector('.dragging');
                dropCircle.className = 'dropCircle';
                dropCircle.style.left = e.clientX - circleBox.node.offsetLeft - dropCircle.clientWidth / 2 + 'px';
                dropCircle.style.top = e.clientY - circleBox.node.offsetTop - dropCircle.clientHeight / 2 + 'px';
                circleBox.append(new Element(dropCircle));
            }
        });

        circleBox.on('dragover', function (e) {
            e.preventDefault();
        });

        container.append(box).appendTo(this.section);
        return makeSubmitButton(
            () => document.querySelectorAll('.dropCircle').length === data.count,
            data.rightMessage,
            data.wrongMessage
        );
    }
}
