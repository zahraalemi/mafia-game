import UI from "./ui.js"

class App {
    constructor() {
        this.ui = new UI();

        this.playerArray = [];
        this.randomArray = [];
        this.finalDataArray = [];
    }
    renderToDOM() {
        this.ui.nextBtn.addEventListener("click", () => {
            this.playerArray = []
            //add chosen roles in playerArray
            this.roleCheckBox(this.ui.mafiaGroupchk)
            this.roleCheckBox(this.ui.townsGroupchk)
            this.roleInputNumber(this.ui.mafiaPeople)
            this.roleInputNumber(this.ui.townsPeople)

            this.ui.changeShow(this.ui.mainShowcase, 'hidden-box')
            this.ui.changeShow(this.ui.showDetailsBox, 'hidden-box')
            this.ui.addDescription(this.playerArray.length)
            /* this.ui.changeShow(this.playerArray.length) */
        });
        this.ui.reStartBtn.addEventListener('click', () => {
            window.location.reload();
        })
        this.ui.startBtn.addEventListener('click', () => {
            this.showRandomPlayer()
        })
        this.ui.showDetailsBtn.addEventListener('click', () => {
            let divDetails = '';
            this.finalDataArray.forEach((player) => {
                divDetails += `<div>${player}</div>`
            })

            this.ui.descriptionPlayer.innerHTML = divDetails
        })


        this.ui.doneBtn.addEventListener('click', () => {
            const roleplayer = this.ui.roleCard.childNodes[3].textContent
            this.finalDataArray.push(this.ui.playerName.value + ':' + roleplayer)

            this.ui.changeShow(this.ui.popUpBox, 'hidden-box')
            this.ui.changeShow(this.ui.popUpBox, 'show-box')

            if (this.randomArray.length === this.playerArray.length) {
                this.ui.changeShow(this.ui.startBtn, 'hidden-box')
                this.ui.changeShow(this.ui.showDetailsBtn, 'hidden-box')
            }
            this.ui.playerName.value ='';
        })

    }

    roleCheckBox(roleArray) {
        roleArray.forEach((item) => {
            if (item.checked) {
                this.playerArray.push(item.id)
            }
        });
    }
    roleInputNumber(roleNumber) {
        const playerNumber = Number(roleNumber.value)
        if (playerNumber > 0) {
            for (let i = 0; i < playerNumber; i++) {
                if (roleNumber.id === 'mafias') {
                    this.playerArray.push("mafia")
                }
                if (roleNumber.id === 'towns') {
                    this.playerArray.push("town")
                }
            }
        }
    }

    showRandomPlayer() {
        if (this.randomArray.length !== this.playerArray.length) {
            let role = this.randomNumber()
            while (this.randomArray.includes(role)) {
                role = this.randomNumber()
            }

            this.randomArray.push(role)
            this.ui.changeShow(this.ui.popUpBox, 'hidden-box')
            this.ui.changeShow(this.ui.popUpBox, 'show-box')

            this.ui.roleCard.innerHTML = `
            <div class="${this.playerArray[role]}-icon role-icon"></div>
            <h1>${this.playerArray[role]}</h1>`

        }
    }
    randomNumber() {
        const randomNumber = Math.floor(Math.random() * this.playerArray.length);
        return randomNumber
    }

}

const app = new App();
//start the app
app.renderToDOM();