let playerArray = [];
const nextBtn = document.querySelector(".next-btn");
const mafiaGroupchk = Array.from(document.getElementsByName('mafia-group'));
const simpleMafia = document.querySelector('.simple-mafia');
const citizenGroupchk = Array.from(document.getElementsByName('citizen-group'));
const simpleCitizen = document.querySelector('.simple-citizen');
const formBox = document.querySelector('.form-box');
const resultBox = document.querySelector('.result-box');
const descriptionPlayer = document.querySelector('.description-player');
const startBtn = document.querySelector('.start-btn')
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
      playerArray.push("mafia sade")
    }
  }
  citizenGroupchk.forEach(citizen => {
    if (citizen.checked) {
      playerArray.push(citizen.id)
    }
  });

  const citizen = Number(simpleCitizen.value)
  if (citizen > 0) {
    for (let i = 0; i < citizen; i++) {
      playerArray.push("citizen sade")
    }
  }

  console.log(playerArray)
  formBox.classList.add("hidden-box");
  resultBox.classList.remove("hidden-box");
  descriptionPlayer.innerHTML = `<h4>Total player ${playerArray.length} <br/>
Now you can start game </h4><p>After seeing your role, don't forget to press the done button</p>`
});

startBtn.addEventListener('click', function () {
  
  
  if (randomArray.length !== playerArray.length) {
    const role = randomFunction()
    if (!randomArray.includes(role)) {
      randomArray.push(role)
      popUpBox.classList.remove('hidden-box')
      roleCard.innerHTML = `<h1>${playerArray[role]}</h1>`
    }
  }


  console.log(randomArray)
})

const randomFunction = function () {
  const randomNumber = Math.floor(Math.random() * playerArray.length);
  return randomNumber
}

doneBtn.addEventListener('click',function(){
  popUpBox.classList.add('hidden-box');
  
  if (randomArray.length === playerArray.length) {
    startBtn.disabled ='true';
  }
})