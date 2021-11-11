const header = document.querySelector('.header__container-user'),
  logout = document.querySelector('.dropdown');

header.addEventListener('click', () => {
  logout.classList.add('open');
});

document.body.addEventListener('click', () => {
  if (event.target.className !== 'header__container-user-name') {
    logout.classList.remove('open');
  }
});
