// --- FONCTIONNALITÉ 1 & 1-bis ---
// Compteur de clics sur le footer
let footer = document.querySelector('footer');
let clickCount = 0;

footer.addEventListener('click', function() {
  clickCount++;
  console.log(`clic numéro ${clickCount}`);
});


// --- FONCTIONNALITÉ 2 ---
// Toggle du menu Hamburger
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

navbarToggler.addEventListener('click', function() {
  navbarHeader.classList.toggle('collapse');
});


// --- FONCTIONNALITÉ 3 ---
// Texte en rouge sur la 1ère card (irréversible)
let firstCard = document.querySelectorAll('.card')[0];
let firstCardEditBtn = firstCard.querySelector('.btn-outline-secondary');

firstCardEditBtn.addEventListener('click', function() {
  firstCard.style.color = 'red';
});


// --- FONCTIONNALITÉ 4 ---
// Texte en vert sur la 2ème card (toggle)
let secondCard = document.querySelectorAll('.card')[1];
let secondCardEditBtn = secondCard.querySelector('.btn-outline-secondary');

secondCardEditBtn.addEventListener('click', function() {
  if (secondCard.style.color === 'green') {
    secondCard.style.color = '';
  } else {
    secondCard.style.color = 'green';
  }
});


// --- FONCTIONNALITÉ 5 ---
// Désactiver Bootstrap au double-clic sur la navbar
let navbar = document.querySelector('.navbar');
let bootstrapLink = document.querySelector('link');

navbar.addEventListener('dblclick', function() {
  bootstrapLink.disabled = !bootstrapLink.disabled;
});


// --- FONCTIONNALITÉ 6 ---
// Réduction des cards au survol du bouton "View"
let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  let viewBtn = card.querySelector('.btn-success');
  let cardImg = card.querySelector('.card-img-top');
  let cardText = card.querySelector('.card-text');
  let status = false; // Petit flag pour savoir si c'est réduit

  viewBtn.addEventListener('mouseover', function() {
    if (!status) {
      cardImg.style.width = '20%';
      cardText.style.display = 'none';
      status = true;
    } else {
      cardImg.style.width = '100%';
      cardText.style.display = 'block';
      status = false;
    }
  });
});


// --- FONCTIONNALITÉ 7 ---
// Faire tourner les cards vers la droite (==>)
let rightBtn = document.querySelector('.btn-secondary');
let cardContainer = document.querySelector('.album .row');

rightBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Empêche la recharge de la page
  let lastCard = cardContainer.lastElementChild;
  cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});


// --- FONCTIONNALITÉ 8 ---
// Faire tourner les cards vers la gauche (<==)
let leftBtn = document.querySelector('.btn-primary');

leftBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Empêche la redirection vers Hacking Project
  let firstCardToMove = cardContainer.firstElementChild;
  cardContainer.appendChild(firstCardToMove); // appendChild met à la fin par défaut
});


// --- FONCTIONNALITÉ 9 ---
// Mise en page spéciale via touches clavier
let logo = document.querySelector('.navbar-brand');
let body = document.body;

window.addEventListener('keypress', function(e) {

  body.className = ''; 

  switch (e.key) {
    case 'a':
      body.classList.add('col-4');
      break;
    case 'y':
      body.classList.add('col-4', 'offset-md-4');
      break;
    case 'p':
      body.classList.add('col-4', 'offset-md-8');
      break;
    case 'b':
      // Remet la mise en page par défaut
      break;
  }
});