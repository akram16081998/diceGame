
var player1=Math.random();
player1=player1*5+1;
player1=Math.floor(player1);

var player2=Math.random();
player2=player2*5+1;
player2=Math.floor(player2);

function test(p1 , p2){
    
    if(p1>p2){
        document.querySelector("h1").innerText="player 1 wins";
    }
    else if(p2>p1){
        document.querySelector("h1").innerText="player 2 wins";
    }
    else{
        document.querySelector("h1").innerText="DRAW";
    }
}
test(player1,player2);
function diceimage(a, b){
    if(a===1){
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        }
    else if(a===2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }
    else if(a===3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
    else if(a===4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(a===5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else{
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
    if(b===1){
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        }
    else if(b===2){
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    }
    else if(b===3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    else if(b===4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    else if(b===5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else{
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
}
diceimage(player1,player2);