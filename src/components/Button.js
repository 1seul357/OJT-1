export default class Button {
  constructor($target, loadModal) {
    this.section = $target.querySelector("section");
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
