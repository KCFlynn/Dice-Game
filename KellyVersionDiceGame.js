function Roll(die) {
    die[0] = Math.floor(Math.random() * 6) + 1;
    die[1] = Math.floor(Math.random() * 6) + 1;
}

function buttonClicked() {
    var balStrg = document.getElementById("balance").innerHTML;
    var balInt = parseInt(balStrg);
    var bal = document.getElementById("balance");
    
    balInt = newBalance(balInt);
    bal.innerHTML = balInt;
}

function newBalance(balance) {
    var die = [];
    
    Roll(die);
    
    var dieOne = "images/dice-" + die[0] + ".jpg";
    var dieTwo = "images/dice-" + die[1] + ".jpg";
    
    document.getElementById("image1").src = dieOne;
    document.getElementById("image2").src = dieTwo;
    
    if (die[0] === die[1] || die[0] + die[1] === 7 || die[0] + die[1] === 11) {
        balance++;
        document.getElementById("status").innerHTML = "Winner Winner!";
    }
    else {
        balance--;
        document.getElementById("status").innerHTML = "Dough!";
    }

    if (balance === 0) {  
        endGame();
    }

    howManyTurns();
    return balance;
}

function howManyTurns() {
    var howMany = document.getElementById("turnCount").innerHTML;
    var howManyInt = parseInt(howMany);
    var total = document.getElementById("turnCount");
    
    howManyInt++;
    total.innerHTML = howManyInt;
}

function endGame() {
    var btn = document.getElementById("ButtonBet");
    
    document.getElementById("status").innerHTML = "Finito Basta!";
    btn.style.display = 'none';
}