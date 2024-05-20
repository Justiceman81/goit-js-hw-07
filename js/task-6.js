function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const container = document.getElementById('boxes');
  const fragments = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragments.appendChild(box);
  }

  container.innerHTML = '';
  container.appendChild(fragments);
}

function destroyBoxes() {
  const container = document.getElementById('boxes');
  container.innerHTML = '';
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const value = parseInt(input.value);
  if (value >= 1 && value <= 100) {
    createBoxes(value);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
