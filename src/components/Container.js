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

        const textBox = document.createElement('p');
        textBox.className = 'textBox';
        this.data.forEach(el => {
            const textElement = document.createElement('h3');
            textElement.innerText = el.text;
            if (el.className) textElement.className = el.className;
            textBox.appendChild(textElement);
        });

        container.appendChild(textBox);
        this.section.appendChild(container);
    }
}
