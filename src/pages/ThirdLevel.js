import Modal from "../components/Modal";

export default function ThirdLevel({ $target, loadPage }) {
  this.section = document.createElement("section");
  this.section.className = "thirdLevel";
  this.loadPage = loadPage;
  $target.appendChild(this.section);

  this.render = () => {};
  this.render();
}
