
class card{
    constructor(newWid, newHei){
        this.width = newWid;
        this.height = newHei;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }
}
debugger;

let clickcount = 0;
let prev = 80;
document.getElementById("startgame").onclick = function createCard(){
    if (clickcount >= 4){
        return;
    }
    for (let i = 0; i < 3; i++) {
        let divObj = document.createElement('div');
        cardObj = new card(prev,prev);
        divObj.style.backgroundColor = "black";
        divObj.style.width = cardObj.getWidth() + "px";
        divObj.style.height = cardObj.getHeight() + "px";
        divObj.style.marginLeft = "132px";
        document.getElementById("Card").appendChild(divObj);
        prev = prev + 20;
        console.log(prev);
    }
    clickcount++;
}



