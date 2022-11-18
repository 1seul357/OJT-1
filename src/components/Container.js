import '../css/Container.css';
import Element, { createElement } from '../util/Element';
import LocalStorage from '../util/LocalStorage';

export default class Container {
    constructor(data) {
        this.data = data;
        this.section = new Element(document.querySelector('.section')).addClass('section');
        this.profileSrc = JSON.parse(LocalStorage.getItem('profile'))?.img;
        this.render();
        new Element(document.querySelector('.app')).append(this.section);
    }
    render() {
        const container = createElement('div').addClass('container2');
        if (this.profileSrc) createElement('img').src(this.profileSrc).addClass('profileImage').appendTo(container);
        const textBox = createElement('p').addClass('textBox');
        this.data.forEach(el => createElement('h3').innerText(el.text).addClass(el.className).appendTo(textBox));
        container.append(textBox).appendTo(this.section);
    }
}
