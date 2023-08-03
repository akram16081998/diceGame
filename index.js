
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
    document.querySelector(".img1").setAttribute("src","./images/dice"+a+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+b+".png");
}
diceimage(player1,player2);
