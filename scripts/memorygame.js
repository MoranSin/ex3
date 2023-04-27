const letters = 'MORAN';
let clickcount = 0;
let currentCard = null;
let prev = 80;
let pair = 0;
let pairCount = 2;
let matched = 0;
let complete = -1;


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


document.getElementById("startgame").onclick = function createCard(){
    if (clickcount >=3){
        return;
    }
    
    for (let i = 0; i < 3; i++) {
        let divObj = document.createElement('div');
        cardObj = new card(prev,prev);
        divObj.style.backgroundColor = "black";
        divObj.style.width = cardObj.getWidth() + "px";
        divObj.style.height = cardObj.getHeight() + "px";
        divObj.style.marginLeft = "132px";
        divObj.style.position = "relative";
        divObj.style.display = "flex";
        divObj.style.alignItems = "center";
        divObj.style.justifyContent = "center";
        divObj.textContent = letters[pair];
        document.getElementById("Card").appendChild(divObj);
        prev = prev + 20;
        pairCount--;
        if (pairCount == 0){
            pair++;
            pairCount = 2;
        }
        
        
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
                    matched++;
                    console.log("matched is:",matched);
                    currentCard.onclick = null;
                    card.onclick = null;
                    currentCard = null;
                    complete = (complete - 2);
                    console.log("the if:",complete);
                    
                    if(complete == 1 || complete == 0){
                        alert("Found all the pairs!");
                        document.getElementById("reset").style.display = "block";
                        document.getElementById("reset").addEventListener("click", function(){
                            location.reload();

                        });
                    }
                    
                } else {setTimeout(()=>{
                    currentCard.classList.remove("letterstyle");
                    card.classList.remove("letterstyle");
                    currentCard = null; 
                },1000);
            }
        }
    }  
}
clickcount++;
complete =+ (3*clickcount);
console.log("the if:",complete);

let assLetters = [];
document.querySelectorAll("#Card div").forEach(function(div){
    assLetters.push(div.textContent);
});
for(let i = assLetters.length -1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
        [assLetters[i],assLetters[j]] = [assLetters[j],assLetters[i]];
    }
    let i = 0;
    document.querySelectorAll("#Card div").forEach(function(div){
        div.textContent = assLetters[i];
        i++;
    })
} 
        
        
        
        
        
        
        
        