import '../css/SecondLevel.css';
import Container from '../components/Container';
import { makeSubmitButton } from '../util/util';

export default class SecondLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = $target.querySelector('.section');
    }

    render() {
        const data = this.data;
        new Container(data.directive);

        const box = document.createElement('section');
        box.className = 'box';
        for (let index = 0; index < 14; index++) {
            const container = document.createElement('div');
            container.className = 'container';
            container.addEventListener('click', function () {
                container.className = container.className === 'container' ? 'selectedContainer' : 'container';
            });
            box.appendChild(container);
        }

        this.section.appendChild(box);
        return makeSubmitButton(
            () => box.querySelectorAll('.selectedContainer').length >= data.count,
            data.rightMessage,
            data.wrongMessage
        );
    }
}
