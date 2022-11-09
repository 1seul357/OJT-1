export default class FirstLevel {
    constructor({ $target }) {
      this.section = document.createElement("section");
      $target.appendChild(this.section);
      this.render();
    }
  
    render() {
      this.section.innerHTML = "";
      const text = document.createElement("h1");
      text.innerText = "첫 번째 페이지";
      this.section.appendChild(text);
    }
  }