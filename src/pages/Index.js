import "../css/Container.css";
import "../css/Index.css";
import "../css/Container.css";
import ProfileImg1 from "../assets/ProfileImg1.png";
import ProfileImg2 from "../assets/ProfileImg2.png";
import ProfileImg3 from "../assets/ProfileImg3.png";
import ProfileImg4 from "../assets/ProfileImg4.png";
import ProfileImg5 from "../assets/ProfileImg5.png";
import Container from "../components/Container";
import Modal from "../components/Modal";
import Button from "../components/Button";
import LocalStorage from "../util/LocalStorage";

export default function Index({ $target, loadPage, data }) {
  this.data = data;
  this.section = $target.querySelector(".section");
  this.loadPage = loadPage;

  this.render = () => {
    const loadPage = this.loadPage;
    const profile = this.data;
    const profileBox = document.createElement("section");
    profileBox.className = "profileBox";

    new Container(profile);

    profile.img.forEach((src, i) => {
      const img = document.createElement("img");
      const name = document.createElement("h3");
      const card = document.createElement("card");
      const nameList = ["정우", "민준", "예지", "우찬", "슬기"];

      card.className = "card";
      img.src = src;
      img.className = "profileImg";
      name.innerText = nameList[i];

      card.addEventListener("click", function () {
        const selectProfiles = document.querySelector(".selectedProfile");
        selectProfiles ? (selectProfiles.className = "card") : null;
        nameList.map((el) =>
          el != nameList[i]
            ? (profile.name[el] = false)
            : (profile.name[el] = true)
        );
        card.className =
          profile.name[nameList[i]] == true ? "selectedProfile" : "card";
        src =
          i == 0
            ? ProfileImg1
            : i == 1
            ? ProfileImg2
            : i == 2
            ? ProfileImg3
            : i == 3
            ? ProfileImg4
            : ProfileImg5;
        LocalStorage.setItem(
          "profile",
          JSON.stringify({ name: nameList[i], img: src })
        );
      });
      card.appendChild(img);
      card.appendChild(name);
      profileBox.appendChild(card);
    });

    const loadModal = async () => {
      const name = JSON.parse(LocalStorage.getItem("profile"));
      const data = {
        answer: -1,
        img: profile.tmp,
        info: "친구를 선택해주세요.",
        message: "함께 학습할 친구를 선택해야 합니다.",
      };
      name
        ? ((data.img = name.img),
          (data.answer = 0),
          (data.info = "선택한 친구 : " + name.name),
          (data.message = "문제가 시작될 때까지 조금만 기다려주세요."))
        : data;
      const modal = new Modal(data);
      await modal.render();
      loadPage();
    };

    new Button($target, loadModal);

    this.section.appendChild(profileBox);
  };
  this.render();
}
