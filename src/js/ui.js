class UI {
    constructor() {
        this.mafiaGroupchk = Array.from(document.getElementsByName('mafia-group'));
        this.mafiaPeople = document.querySelector('.mafia-people');
        this.townsGroupchk = Array.from(document.getElementsByName('towns-group'));
        this.townsPeople = document.querySelector('.towns-people');
        this.playerName = document.querySelector('.player-name');

        this.mainShowcase = document.querySelector('.main-showcase');
        this.showDetailsBox = document.querySelector('.result-box');
        this.descriptionPlayer = document.querySelector('.description-player');
        this.popUpBox = document.querySelector('.popup-box')
        this.roleCard = document.querySelector('.role-card')
        this.doneBtn = document.querySelector('.done-btn')


        this.nextBtn = document.querySelector(".next-btn");
        this.startBtn = document.querySelector('.start-btn')
        this.reStartBtn = document.querySelector('.restart-btn')
        this.showDetailsBtn = document.querySelector('.showDetails-btn')

    }
    changeShow(item, classes) {
        item.classList.toggle(classes);
    }

    addDescription(qty) {
        this.descriptionPlayer.innerHTML = `<h4>Total player ${qty} <br/>
Now you can start game </h4><p>After seeing your role, don't forget to press the done button</p>`

    }
}

export default UI;