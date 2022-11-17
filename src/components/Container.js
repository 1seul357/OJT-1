import '../css/Container.css';
import LocalStorage from '../util/LocalStorage';

export default class Container {
    constructor(data) {
        this.data = data;
        this.section = document.querySelector('.section');
        this.section.className = 'section';
        this.profileSrc = JSON.parse(LocalStorage.getItem('profile'))?.img;
        this.render();
        document.querySelector('.app').appendChild(this.section);
    }
    render() {
        const container = document.createElement('div');
        container.className = 'container2';

        const profileImage = document.createElement('img');
        profileImage.src = this.profileSrc;
        profileImage.className = 'profileImage';

        this.profileSrc ? container.appendChild(profileImage) : '';

        const text = document.createElement('h3');
        const message = document.createElement('h3');
        text.className = 'text';
        text.innerText = this.data.text ? this.data.text : '';
        message.innerText = this.data.message;

        const textBox = document.createElement('p');
        textBox.className = 'textBox';
        textBox.appendChild(text);
        textBox.appendChild(message);

        container.appendChild(textBox);
        this.section.appendChild(container);
    }
}
