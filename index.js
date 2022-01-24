var randomNumber1 = Math.floor(Math.random() * 2) + 1; //1-6

document.querySelector("button").addEventListener("click", toss);

function toss(){
    if (randomNumber1 <= 1){
        alert("You got heads");
    }
    else if (randomNumber1 >= 2){
        alert("You got tails");
    }
}