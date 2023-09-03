const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');

function getRandomValue() {
  return Math.floor(Math.random() * 100) + 'px';
}

function setRandomTransform(box) {
  box.style.transform = `translate(${getRandomValue()}, ${getRandomValue()})`;
  
}

function updateTransforms() {
  boxes.forEach((box) => {
    setRandomTransform(box);
  });
  requestAnimationFrame(updateTransforms);
}

boxes.forEach((box) => {
  box.style.animation = `float 2.5s infinite alternate`;
  setRandomTransform(box);
});

requestAnimationFrame(updateTransforms);

container.style.overflow = 'hidden';
