//function fadeInOnScroll() {
  var elements = document.querySelectorAll('.fade-in');
  
  //elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

//function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//window.addEventListener('scroll', fadeInOnScroll);

//function showPopupBox() {
  // Code pour afficher la popup box avec le message associé
  // ...
  alert("L'opération a été effectuée.");
}

//var confirmButton = document.getElementById('confirm-button');
confirmButton.addEventListener('click', showPopupBox);

//var seeMoreLink = document.getElementById('see-more-link');
seeMoreLink.addEventListener('click', function(event) {
  event.preventDefault(); 
//var targetElement = document.getElementById('first-paragraph');
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
});

// Fonction pour animer les icônes Logos réseaux sociaux et les traits violets
function animateSocialIconsAndLines() {
  var socialIcons = document.querySelectorAll('.social-icon');
  var purpleLines = document.querySelectorAll('.purple-line');

  // Parcours de tous les éléments et ajout de la classe d'animation
  socialIcons.forEach(function(icon) {
    icon.classList.add('scroll-animation');
  });

  purpleLines.forEach(function(line) {
    line.classList.add('scroll-animation');
  });
}

// Appel de la fonction d'animation lors du chargement de la page
window.addEventListener('load', animateSocialIconsAndLines);

// Variables globales
var characterImages = document.querySelectorAll('.character-image');
var characterDescriptions = document.querySelectorAll('.character-description');
var currentIndex = 0;

// Fonction pour mettre à jour l'affichage des images des personnages
function updateCharacterDisplay() {
  characterImages.forEach(function(image) {
    image.classList.remove('selected');
    image.style.transform = 'scale(1)';
  });

  characterDescriptions.forEach(function(description) {
    description.classList.remove('visible');
  });

  characterImages[currentIndex].classList.add('selected');
  characterDescriptions[currentIndex].classList.add('visible');
  characterImages[currentIndex].style.transform = 'scale(1.2)';
}

// Fonction pour gérer le défilement des images vers la droite
function scrollRight() {
  currentIndex = (currentIndex + 1) % characterImages.length;
  updateCharacterDisplay();
}

// Appel de la fonction d'affichage initial lors du chargement de la page
window.addEventListener('load', updateCharacterDisplay);

// Événement de clic sur la flèche de droite pour faire défiler les images
var scrollRightButton = document.getElementById('scroll-right-button');
scrollRightButton.addEventListener('click', scrollRight);

// Fonction pour afficher la popup box
function showPopupBox(success) {
  var message = success ? 'Félicitations !' : 'Désolé, réessayez.';
  // Code pour afficher la popup box avec le message associé
  // ...
  alert(message);
}

// Événement de réponse à une énigme
var answerButton = document.getElementById('answer-button');
answerButton.addEventListener('click', function() {
  var userAnswer = document.getElementById('user-answer').value;
  var correctAnswer = '42'; // Remplacez par la réponse correcte à l'énigme

  if (userAnswer === correctAnswer) {
    showPopupBox(true); // Réussite
    // Code pour passer à l'énigme suivante
    // ...
  } else {
    showPopupBox(false); // Échec
  }
});

// Fonction pour gérer l'effet de zoom au passage de la souris
function zoomOnMouseover(element) {
  element.addEventListener('mouseover', function() {
    element.style.transform = 'scale(1.1)';
  });

  element.addEventListener('mouseout', function() {
    element.style.transform = 'scale(1)';
  });
}

// Zoom pour les titres (H1) et sous-titres (H2)
var titles = document.querySelectorAll('h1, h2');
titles.forEach(function(title) {
  zoomOnMouseover(title);
});

// Zoom pour l'image de T'Challa sur la page d'accueil
var tchallaImage = document.getElementById('tchalla-image');
zoomOnMouseover(tchallaImage);

// Fonction pour afficher le minuteur avec compte à rebours
function displayCountdownTimer() {
  var countdownElement = document.getElementById('countdown-timer');

  // Date de fin du compte à rebours
  var endDate = new Date('July 25, 2022 00:01:00');

  // Fonction pour mettre à jour le minuteur
  function updateTimer() {
    var currentDate = new Date();
    var timeDifference = endDate - currentDate;

    if (timeDifference <= 0) {
      // Le compte à rebours est terminé, affichez le message "Temps écoulé"
      countdownElement.textContent = 'Temps écoulé';
    } else {
      // Calculez les jours, heures, minutes et secondes restantes
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Affichez le compte à rebours dans le format souhaité
      countdownElement.textContent = days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    }
  }

  // Appel initial pour mettre à jour le minuteur
  updateTimer();

  // Mettre à jour le minuteur toutes les secondes
  setInterval(updateTimer, 1000);
}

// Appel de la fonction pour afficher le minuteur
displayCountdownTimer();

// Affichage du message "Coming Soon" et du logo Figma
var comingSoonMessage = document.createElement('p');
comingSoonMessage.textContent = 'Coming Soon';

var figmaLogo = document.createElement('img');
figmaLogo.src = 'assets/Pop_up_fin_du_quiz.png';

// Ajouter le message et le logo à la Popup Box
var popupBox = document.getElementById('popup-box');
popupBox.appendChild(comingSoonMessage);
popupBox.appendChild(figmaLogo);
