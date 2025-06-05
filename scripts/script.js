const openBtn = document.querySelector(".search__button-modal");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-window__button-close");

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
