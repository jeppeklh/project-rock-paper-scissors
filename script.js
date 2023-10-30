function getComputerChoice() {
    const x = Math.floor(Math.random() * 3) + 1; 
    let choice = "";
    if(x === 1) {
        choice = "Rock";
    } else if (x === 2){
        choice = "Paper";
    } else {
        choice ="Scissors";
    }
    return choice;
}
