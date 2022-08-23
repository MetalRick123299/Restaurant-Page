import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 7,
  },
});

function loadMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'Menu');
  menu.classList.add('Menu');

  for (let i = 1; i < 16; i++) {
    const gridItem = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');

    gridItem.classList.add('grid-item');

    h2.textContent = `Burger ${i}!!`;
    p.textContent = lorem.generateSentences(1);

    img.setAttribute('src', `./images/Burgers/BurgerPic-${i}.png`);
    img.setAttribute('alt', `Burgeer Pic-${i}`);

    gridItem.appendChild(h2);
    gridItem.appendChild(img);
    gridItem.appendChild(p);

    menu.appendChild(gridItem);
  }

  return menu;
}

export default loadMenu;
