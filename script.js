const ratting_cards = document.querySelectorAll('.rating-button');
const submit_btn = document.querySelector('.submit-btn');
const ratting_section = document.querySelector('.section-rating');
const thank_you_section = document.querySelector('.section-thank-you');
const rate_point = document.getElementById('rate');

let rate = null;

ratting_cards.forEach((ratting_card) => {
  ratting_card.addEventListener('click', (e) => {
    const active = document.querySelector('.checked');
    if (active) {
      active.classList.remove('checked');
    }
    const card = e.target;

    card.classList.add('checked');
    rate = e.target.innerText;
  });
});
submit_btn.addEventListener('click', () => {
  if (rate) {
    rate_point.innerText = rate;
    ratting_section.classList.add('hidden');
    thank_you_section.classList.remove('hidden');
  }
});
