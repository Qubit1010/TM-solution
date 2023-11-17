const triggerElement = document.querySelector('#content');
const hiddenElement = document.querySelector('#b');

triggerElement.addEventListener('mouseenter', () => {
  hiddenElement.style.display = 'grid';
});

hiddenElement.addEventListener('mouseenter', () => {
  hiddenElement.style.display = 'grid';
});

hiddenElement.addEventListener('mouseleave', () => {
  hiddenElement.style.display = 'none';
});

console.log("JJ")