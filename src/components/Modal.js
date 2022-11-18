import '../css/Modal.css';
import O from '../assets/O.png';
import X from '../assets/X.png';
import Element, { createElement } from '../util/Element';

export default class Modal {
    constructor(data) {
        this.data = data;
        this.modal = createElement('section').addClass('modal');
        this.render();
        new Element(document.querySelector('.app')).append(this.modal);
    }

    render() {
        const modalWrapper = createElement('section').addClass('modalWrapper').appendTo(this.modal);
        console.log(this.data.info ?? (this.data.answer ? '정답입니다!' : '틀렸습니다!'));
        const info = createElement('h2')
            .innerText(this.data.info ?? (this.data.answer ? '정답입니다!' : '틀렸습니다!'))
            .addClass('modalInfo');
        const message = createElement('h3').innerText(this.data.message).addClass('modalMessage');
        const img = createElement('img')
            .addClass(this.data.answer !== -1 ? 'modalImg' : 'modalImg2')
            .src(this.data.img ?? (this.data.answer ? O : X))
            .on('load', () => modalWrapper.append(img).append(info).append(message));

        return new Promise(resolve => {
            setTimeout(() => {
                this.modal.remove();
                if (this.data.answer === true) {
                    resolve();
                }
            }, 2000);
        });
    }
}
