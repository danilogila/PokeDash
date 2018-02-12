window.onload = function aumentoXp(){

var inputXpUser = document.getElementsByClassName("current-xp")[0];
var currentXp = parseInt(inputXpUser.textContent);
console.log(currentXp);

    for(let x = 0; x < currentXp; x++){
        setTimeout(function() {
            inputXpUser.textContent = x;
        }, 2*x);
    }
}