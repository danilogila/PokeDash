

function buscarPokemon(id) {


    const endpoint = "https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/";
    const URL = endpoint + id;
    const modalWrapper = document.querySelector(".modal");

    // fetch(URL)
    //     .then((resp) => resp.json())
    //     .then(function (data) {

    //         console.log(data);
    //         getData(data);
    //     })
    //     .catch(function (error) {

    //         console.log(error);
    //         console.log("you've met with a terrible Error, haven't you?");
    //         modalWrapper.classList.add("modal-active");
            
    //     });

    const request = new XMLHttpRequest();

    request.open('GET', URL, true);
    request.onload = function(){
        
        let data = JSON.parse(this.response);

        if(request.status >= 200 && request.status < 400){   
            
            getData(data);

        }else{
            
            console.log("you've met with a terrible Error, haven't you?");
            modalWrapper.classList.add("modal-active");
        }
    }

    request.send();
    
}

function getData(data) {


    let pokemonObj = {
        name: data.name,
        id: data.id,
        abilities: data.abilities,
        height: data.height,
        weight: data.weight,
        image: data.sprites,
        tipos: data.types,
        xpBase: data.base_experience,
        stats: data.stats
    }

    alterarHabilidades(...pokemonObj.abilities);
    alterarCategorias(...pokemonObj.tipos);
    alterarFoto(pokemonObj.image);
    alterarAtributos(pokemonObj.height, pokemonObj.weight, pokemonObj.xpBase);
    alterarBarraDeStats(pokemonObj.stats);
    alterarNome(pokemonObj.name);
    alterarDescricao(pokemonObj.id);

}

function alterarHabilidades(...abilities) {

    //Com essa função eu faço a inserção das habilidades do Pokemon no select do mesmo

    let qtdAbilidades = abilities.length;
    let abilitiesList = abilities;
    const selectHabilidades = document.querySelector("#pkmHabilidades");

    selectHabilidades.options.length = 0;

    for (let i = 0; i < qtdAbilidades; i++) {

        const newOption = document.createElement("option");
        newOption.text = (abilitiesList[i].ability.name);
        selectHabilidades.options.add(newOption);

    }
}

function alterarFoto(imgAtt) {

    let pokemonPicture = document.querySelector(".pokemon-picture");
    pokemonPicture.src = imgAtt.front_default;
}

function alterarAtributos(height, weight, xp) {

    let pkmHeight = document.querySelector(".height-value");
    pkmHeight.textContent = parseFloat((height).toFixed(1))/10 + " m(s)";

    let pkmWeight = document.querySelector(".weight-value");
    pkmWeight.textContent = parseFloat((weight).toFixed(1))/10 + " kg(s)";

    let pkmXp = document.querySelector(".pokemon-xp");
    pkmXp.textContent = parseInt(xp);

    return pkmHeight, pkmWeight, pkmXp;
}

function alterarBarraDeStats(stats){
    console.log(stats);

    let statsDiv = document.querySelectorAll(".stats-bar");
    console.log(statsDiv);

    const TAM = statsDiv.length;
    console.log(TAM);

    //terminar depois. Tenho que pensar em uma forma de
    //converter o valor em alguma altura para a DIV
}

function alterarCategorias(categorias) {

    let pkmCategotia = document.querySelector(".category-value");
    pkmCategotia.textContent = categorias.type.name;

    let pokemonIconType = document.querySelector(".nature-icon");
    pokemonIconType.src = `img/types/${categorias.type.name}.png`;

    return pkmCategotia;
}

function alterarNome(name) {
    let pkmName = document.querySelectorAll(".pokemon-name");
    let TAM = pkmName.length;

    for (let i = 0; i < TAM; i++) {
        pkmName[i].textContent = name;
    }

    return pkmName;
}

function alterarDescricao(id) {

    console.log(id);
    let URL = "http://pokeapi.co/api/v2/pokemon-species/" + id + "/flavor_text";

    console.log(URL);
}

