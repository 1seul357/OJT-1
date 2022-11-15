import "../css/Container.css";
import "../css/Index.css";
import "../css/Container.css";
import Container from "../components/Container";
import Modal from "../components/Modal";
import LocalStorage from "../util/LocalStorage";

export default function Index ({ $target, loadPage, data }) {
    this.data = data;
    this.section = document.createElement("section");
    this.section.className = "section";
    this.loadPage = loadPage;
    $target.appendChild(this.section);

    this.render = () => {
        this.section.innerHTML = "";
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
                selectProfiles ? selectProfiles.className = "card" : null;
                nameList.map((el) => el != nameList[i] ? profile.name[el] = false : profile.name[el] = true);
                card.className = profile.name[nameList[i]] == true ? "selectedProfile" : "card";
                LocalStorage.setItem("profile", JSON.stringify({"name": nameList[i], "img": src}));
            })
            card.appendChild(img);
            card.appendChild(name);
            profileBox.appendChild(card);
        });

        const button = document.createElement("button");
        button.innerText = "Next";
        button.addEventListener("click", async function () {
            const name = JSON.parse(LocalStorage.getItem("profile"));
            const data = {
                answer: 0,
                img: name.img,
                info: "선택한 친구 : " + name.name, 
                message: "문제가 시작될 때까지 조금만 기다려주세요."
              };
            const modal = new Modal(data);
            await modal.render();
            loadPage();
        })
        this.section.appendChild(button);
        this.section.appendChild(profileBox);
    }
    this.render();
}