function loadHome() {
  const home = document.createElement('div');
  home.setAttribute('id', 'Home');
  home.classList.add('Home');

  const h1 = document.createElement('h1');
  h1.textContent = 'Freshest Burgers in Your Area';
  home.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = 'Making burgers since 1945';
  home.appendChild(h2);

  const img = document.createElement('img');
  img.setAttribute('src', './images/chef.jpg');
  img.setAttribute('alt', 'Chef Pic');
  home.appendChild(img);

  const h2_bottom = document.createElement('h2');
  h2_bottom.textContent = 'Order Online or Visit Us';
  home.appendChild(h2_bottom);

  return home;
}

export default loadHome;
