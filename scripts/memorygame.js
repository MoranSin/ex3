const letters = 'MORAN';
let clickcount = 0;
let currentCard = null;

function getLetter(){
    const index = Math.floor(Math.random() * letters.length);
    return letters[index];
}

class card{
    constructor(newWid, newHei){
        this.width = newWid;
        this.height = newHei;
        this.letter = 'M';
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }
}
debugger;


let prev = 80;
let cardsNum = 0;
document.getElementById("startgame").onclick = function createCard(){
    if (clickcount >= 3){
        return;
    }

        for (let i = 0; i < 3; i++) {
            let divObj = document.createElement('div');
            cardObj = new card(prev,prev);
            divObj.style.backgroundColor = "black";
            divObj.style.width = cardObj.getWidth() + "px";
            divObj.style.height = cardObj.getHeight() + "px";
            divObj.style.marginLeft = "132px";
            divObj.style.display = "flex";
            divObj.style.alignItems = "center";
            divObj.style.justifyContent = "center";
            divObj.textContent = getLetter();
            document.getElementById("Card").appendChild(divObj);
            prev = prev + 20;
            divObj.onclick = function pickCard(){
                let card = this;
                card.classList.add("letterstyle");
                if (currentCard === null){
                    currentCard = card;
                    currentCard.classList.add('letterstyle');
                } else {
                    if (currentCard !== card & currentCard.textContent === card.textContent){
                        currentCard.style.backgroundColor = "red";
                        card.style.backgroundColor = "red";
                        currentCard.onclick = null;
                        card.onclick = null;
                        currentCard = null;
                    } else {
                            currentCard.classList.remove("letterstyle");
                            card.classList.remove("letterstyle");
                            currentCard = null;
                        }
                    }
                }  
            }
            clickcount++;
} 

  

