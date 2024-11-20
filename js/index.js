const burger = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.header__nav');

if (burger && headerNav) {
  burger.addEventListener('click', () => {
    headerNav.classList.add('active');
  });

  headerNav.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('header__nav-close');
    const isLink = event.target.classList.contains('header__nav-menu-item-link');

    if (isLayout || isClose || isLink) headerNav.classList.remove('active');
  });
}
