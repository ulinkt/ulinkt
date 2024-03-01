 // Mengganti elemen yang aktif menjadi "PROJECT" saat halaman dimuat
 document.addEventListener('DOMContentLoaded', function () {
  const initialButton = document.querySelector('.buttons-section button[data-name="project"]');
  initialButton.classList.add('active');
  filterCards({ target: initialButton });
  
});

const buttonSection = document.querySelectorAll('.buttons-section button');
const cardSection = document.querySelectorAll('.cards-section .card');

const filterCards = (e) => {
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');

  cardSection.forEach((card) => {
      card.classList.add('hide');

      if (
          card.dataset.name === e.target.dataset.name ||
          e.target.dataset.name === 'all'
      ) {
          card.classList.remove('hide');
      }
  });
};

buttonSection.forEach((button) =>
  button.addEventListener('click', filterCards)
);