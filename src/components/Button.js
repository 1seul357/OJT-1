import Element, { createElement } from '../util/Element';

export default class Button {
    constructor(loadModal) {
        this.section = new Element(document.querySelector('section'));
        this.loadModal = loadModal;
        this.render();
    }

    render() {
        const loadModal = this.loadModal;
        createElement('button').innerText('Next').on('click', loadModal).appendTo(this.section);
    }
}
