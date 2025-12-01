//console.log('hello');

const cards = document.querySelectorAll('.cards .card');
const modal = document.getElementById('modale-card');
const closeBtn = document.getElementById('closeModal');

// Открытие модали при клике на карточку
cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.add('open');
  });
});

// Закрытие модали по кнопке "Закрыть"
closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Опционально: закрытие при клике вне содержимого модали
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});