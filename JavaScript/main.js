function changeBody() {
  document.body.style.backgroundColor = '#ffff5a';
}
function changeTitle() {
  const myTitle = document.getElementById('pageHeader');
  myTitle.innerHTML = 'Hey how are you doing people.....Hey how are you doing people.....Hey how are you doing people.....Hey how are you doing people.....Hey how are you doing people.....Hey how are you doing people.....Hey how are you doing people.....';
}
function darkContainer() {
  const myTitle = document.getElementById('pageHeader');
  const myContainer = document.getElementById('container');

  myContainer.style.backgroundColor = '#000a12';
  myTitle.style.color = 'white';
}
function changeBorder() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => c.style.border = "7px solid red");
  
}
function changeCardTitles() {
  const titles = document.querySelectorAll('.card-title');
  titles.forEach(t => t.style.backgroundColor = "#46d0ff");
  titles.forEach(t => t.innerHTML = "Not yet done....");
}
function changeCardBody() {
  const cardBodies = document.querySelectorAll('.card-body');
  cardBodies.forEach(cb => cb.style.backgroundColor = '#4f5b62');
  cardBodies.forEach(cb => cb.style.color = '#fff');
  cardBodies.forEach(cb => cb.style.fontSize = '20px');
  cardBodies.forEach(cb => cb.innerHTML = "Curry");
  cardBodies.forEach(cb => cb.style.minHeight = '50vh');
}
function changeCard(cardNumber) {
  const cards = document.querySelectorAll('.card');
  cards[cardNumber].querySelector('.card-body').style.backgroundColor = '#1abc9c';
  cards[cardNumber].querySelector('.card-title').style.backgroundColor = '#e74c3c';
  cards[cardNumber].querySelector('.card-body').style.color = '#fff';
  cards[cardNumber].querySelector('.card-body').innerHTML = 'I changed card #' + (cardNumber+1);
  cards[cardNumber].querySelector('.card-title').innerHTML = '#' + (cardNumber+1) + " card title";
}
function hideOneCard(cardNumber) {
  const cards = document.querySelectorAll('.card');
  cards[cardNumber].classList.add('hidden');
  cards[cardNumber].classList.remove('show');
}
function showOneCard(cardNumber) {
  const cards = document.querySelectorAll('.card');
  cards[cardNumber].classList.remove('hidden');
  cards[cardNumber].classList.add('show');
}
function showAllCard() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => c.classList.remove('hidden'));
  cards.forEach(c => c.classList.add('show'));
}
function hideAllCard() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => c.classList.add('hidden'));
  cards.forEach(c => c.classList.remove('show'));
}