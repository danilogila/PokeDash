(function (){


var inputXpUser = document.getElementsByClassName("current-xp")[0];
var currentXp = parseInt(inputXpUser.textContent);
console.log(currentXp);

    for(let x = 0; x < currentXp; x++){
        setTimeout(function() {
            inputXpUser.textContent = x;
        }, 2*x);
    }
})();


document.querySelector(".btn-search").addEventListener("click", function(e){
    e.preventDefault();

    let pkmId = document.querySelector(".search-input").value.toLowerCase();
    
    console.log(pkmId);

    fetchURLs(pkmId);

});

