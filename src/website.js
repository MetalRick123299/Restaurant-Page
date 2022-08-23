import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Burger Joint";

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  const navArr = [
    [home, "Home", loadHome()],
    [menu, "Menu", loadMenu()],
    [contact, "Contact", loadContact()],
  ];
  navArr.forEach((item) => {
    item[0].textContent = item[1];
    item[0].setAttribute("id", item[1]);
    nav.appendChild(item[0]);
    item[0].addEventListener("click", (e) => {
      const main = document.querySelector("#main");
      if (e.target.classList.contains("active")) return;
      setCurrentButton(item[0]);
      if (main.firstChild.id == item[1]) return;
      main.firstChild.remove();
      main.appendChild(item[2]);
    });
  });
  home.classList.add("active");

  return nav;
}

function setCurrentButton(button) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.classList.add("main");
  main.appendChild(loadHome());

  return main;
}

function startWebsite() {
  const content = document.querySelector("#content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default startWebsite;
