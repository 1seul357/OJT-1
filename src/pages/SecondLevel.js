import '../css/SecondLevel.css';
import Container from '../components/Container';
import { makeSubmitButton } from '../util/util';
import Element, { createElement } from '../util/Element';

export default class SecondLevel {
    constructor({ $target, data }) {
        this.data = data;
        this.section = new Element($target.querySelector('.section'));
    }

    render() {
        const data = this.data;
        new Container(data.directive);

        const box = createElement('section').addClass('box').appendTo(this.section);
        for (let index = 0; index < 14; index++) {
            const container = createElement('div')
                .addClass('container')
                .on('click', () => container.toggleClass('container').toggleClass('selectedContainer'))
                .appendTo(box);
        }

        return makeSubmitButton(
            () => box.selectAll('.selectedContainer').length >= data.count,
            data.rightMessage,
            data.wrongMessage
        );
    }
}
