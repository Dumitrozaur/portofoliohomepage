const maincube = document.querySelector('.maincube');
const twitter = document.querySelector('.twitter');

maincube.addEventListener('mouseenter', () => {
  twitter.classList.add('hovered');
});

maincube.addEventListener('mouseleave', () => {
  twitter.classList.remove('hovered');
});