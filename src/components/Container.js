import "../css/Container.css";

export default class Container {
  constructor(data) {
    this.data = data;
    this.section = document.querySelector(".section");
    this.section.className = "section";
    this.render();
    document.querySelector(".app").appendChild(this.section);
  }
  render() {
    const container = document.createElement("div");
    container.className = "container2";

    const profileImage = document.createElement("img");
    profileImage.src = this.data.profile;
    profileImage.className = "profileImage";

    this.data.profile ? container.appendChild(profileImage) : "";

    const text = document.createElement("h3");
    const message = document.createElement("h3");
    text.className = "text";
    text.innerText = this.data.text ? this.data.text : "";
    message.innerText = this.data.message;

    const textBox = document.createElement("div");
    textBox.className = "textBox";
    textBox.appendChild(text);
    textBox.appendChild(message);

    container.appendChild(textBox);
    this.section.appendChild(container);
  }
}