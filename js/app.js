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

document.querySelector(".btn-search").addEventListener("click",function(e){
    e.preventDefault();
});

function controlarInput(){

    let inputSearch = document.querySelector(".search-input");

    //SOmente para verificar se o input foi pego
    console.log(inputSearch);

    if(!inputSearch.classList.contains("search-visible")){
        inputSearch.classList.add("search-visible");
    }else{
        inputSearch.classList.remove("search-visible");
    }

}