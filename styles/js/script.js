const choice = document.querySelectorAll('.choice');
const submit = document.getElementById('submit');
const ratePage = document.getElementById('ratePage');
const thankYouPage = document.getElementById('tyPage');
const rateText = document.getElementById('rating');
let rating = '';

function removeClickClass() {
  choice.forEach((btn) => {
    btn.classList.remove('clicked');
  });
}

choice.forEach((btn) => {
  btn.addEventListener('click', ({ target }) => {
    removeClickClass();
    target.classList.add('clicked');
    rating = target.innerHTML;
  });
});

submit.addEventListener('click', () => {
  if (rating === '') return;
  ratePage.classList.add('hide');
  thankYouPage.classList.remove('hide');
  rateText.innerHTML = rating;
});
