let playerArray = [];
const nextBtn = document.querySelector(".next-btn");
const mafiaGroupchk = Array.from(document.getElementsByName('mafia-group'));
const simpleMafia = document.querySelector('.simple-mafia');
const townsGroupchk = Array.from(document.getElementsByName('towns-group'));
const townsPeople = document.querySelector('.towns-people');
const mainShowcase = document.querySelector('.main-showcase');
const resultBox = document.querySelector('.result-box');
const descriptionPlayer = document.querySelector('.description-player');
const startBtn = document.querySelector('.start-btn')
const reStartBtn = document.querySelector('.restart-btn')
const popUpBox = document.querySelector('.popup-box')
const roleCard = document.querySelector('.role-card')
const doneBtn = document.querySelector('.done-btn')
let randomArray = []

nextBtn.addEventListener("click", function () {
  playerArray = [];
  mafiaGroupchk.forEach(mafia => {
    if (mafia.checked) {
      playerArray.push(mafia.id)
    }
  });

  const mafia = Number(simpleMafia.value)
  if (mafia > 0) {
    for (let i = 0; i < mafia; i++) {
      playerArray.push("mafia")
    }
  }
  townsGroupchk.forEach(towns => {
    if (towns.checked) {
      playerArray.push(towns.id)
    }
  });

  const towns = Number(townsPeople.value)
  if (towns > 0) {
    for (let i = 0; i < towns; i++) {
      playerArray.push("townspeople")
    }
  }

  /* console.log(playerArray) */
  mainShowcase.classList.add("hidden-box");
  mainShowcase.classList.remove("main-showcase");
  resultBox.classList.remove("hidden-box");
  resultBox.classList.add("show-box");
  descriptionPlayer.innerHTML = `<h4>Total player ${playerArray.length} <br/>
Now you can start game </h4><p>After seeing your role, don't forget to press the done button</p>`
});

startBtn.addEventListener('click', function () {
  
  
  if (randomArray.length !== playerArray.length) {
    const role = randomFunction()
    if (!randomArray.includes(role)) {
      randomArray.push(role)
      popUpBox.classList.remove('hidden-box')
      popUpBox.classList.add('show-box')
      roleCard.innerHTML = `
      <div class="${playerArray[role]}-icon role-icon"></div>
      <h1>${playerArray[role]}</h1>`
    }
  }


  console.log(randomArray)
})

reStartBtn.addEventListener('click',function(){
  window.location.reload();
})

const randomFunction = function () {
  const randomNumber = Math.floor(Math.random() * playerArray.length);
  return randomNumber
}

doneBtn.addEventListener('click', function () {
  popUpBox.classList.add('hidden-box');
  popUpBox.classList.remove('show-box');

  if (randomArray.length === playerArray.length) {
    startBtn.disabled = 'true';
  }
})