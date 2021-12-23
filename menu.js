const openMenu = () => {
  console.log("detected")
  document.querySelector('#desktop-nav').classList.add('visible');
};

document.querySelector('.menu-bars').addEventListener('click', openMenu);
