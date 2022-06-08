const previous = document.querySelector(".prev");
const previousMobile = document.querySelector(".prev-mobile");
const next = document.querySelector(".next");
const cardContent = document.querySelector(".portfolio-card");
const cardDesc = document.querySelector(".portfolio-desc-text");
let counter = 1;

next.addEventListener("click", nextCard);
previous.addEventListener("click", prevCard);
previousMobile.addEventListener("click", prevCard);

function nextCard() {
  if (counter === 3) {
    counter = 0;
  }
  counter += 1;

  if (counter === 2) {
    secondCard();
  } else if (counter === 3) {
    thirdCard();
  } else {
    firstCard();
  }
}

function prevCard() {
  if (counter === 1) {
    counter = 4;
  }
  counter -= 1;

  if (counter === 1) {
    firstCard();
  } else if (counter === 2) {
    secondCard();
  } else {
    thirdCard();
  }
}

const first =
  '<h3>Green Spaces</h3>This was my first year final exam project. My best work this far. A good mix of JS, APIs, HTML and CSS. <p><a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-oyvind-meldahl" target="_blank">GITHUB</a> | <a href="https://greenexam.netlify.app/" target="_blank">LIVE SITE</a></p>';

const second =
  '<h3>Community Science Museum</h3>This was my semester-project after the first semester at Noroff. Nothing too complicated, just plain HTML and CSS. I tried to focus on colours and making sure the target audience and visual look of the site were a match.<p><a href="https://github.com/oyvind-meldahl/semesterproject1" target="_blank">GITHUB</a> | <a href="https://coscm.netlify.app" target="_blank">LIVE SITE</a></p>';

const third =
  '<h3>Rainydays Jackets</h3>This was a project that started out as simple HTML and CSS in the first weeks of school, and grew as a cross-subject-project to be something bigger. Contains a bit of everything, but I am thinking it should be re-written to clear out un-nescessary code.<p><a href="https://github.com/Noroff-FEU-Assignments/cross-course-project-oyvind-meldahl" target="_blank">GITHUB</a> | <a href="https://oymel.netlify.app/" target="_blank">LIVE SITE</a></p>';

function firstCard() {
  document.getElementById("card").style.backgroundImage = "url('/images/green.jpg')";
  cardDesc.innerHTML = first;
}

function secondCard() {
  document.getElementById("card").style.backgroundImage = "url('/images/museum.jpg')";
  cardDesc.innerHTML = second;
}

function thirdCard() {
  document.getElementById("card").style.backgroundImage = "url('/images/rainy.jpg')";
  cardDesc.innerHTML = third;
}

firstCard();
