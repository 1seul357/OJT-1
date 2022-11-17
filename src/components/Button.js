export default class Button {
  constructor(loadModal) {
    this.section = document.querySelector("section");
    this.loadModal = loadModal;
    this.render();
  }

  render() {
    const loadModal = this.loadModal;
    const button = document.createElement("button");
    button.innerText = "Next";

    button.addEventListener("click", function () {
      loadModal();
    });
    this.section.appendChild(button);
  }
}
