async function fetchURLs(id) {

    const endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const URL = endpoint + id;
    const URLDesc = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    const modalWrapper = document.querySelector(".modal");

    const myHeaders = new Headers();
    
    const myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' 
                };

    try {
      let data = await Promise.all([

        fetch(URL, myInit).then((response) => response.json()),
        fetch(URLDesc, myInit).then((response) => response.json())
      ]);

      getData(data[0]);
      console.log();
      alterarDescricao(data[1].flavor_text_entries[4].flavor_text);

    } catch (error) {
      console.log(error);
    }
  }


function buscarPokemon(id) {


    const endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const URL = endpoint + id;
    const URLDesc = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    const modalWrapper = document.querySelector(".modal");

    fetch(URL)
        .then((resp) => resp.json())
        .then((data) =>{

            console.log(data);
            getData(data);
        }),
        fetch(URLDesc)
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data);
            alterarDescricao(data);
        })    
        .catch(function (error) {

            console.log(error);
            console.log("You've met with a terrible Error, haven't you? Pokemon not found");
            modalWrapper.classList.add("modal-active");
            
        });
    
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

function alterarBarraDeStats(valoresBarra){

    let cont = 0;

    let statsDiv = document.querySelectorAll(".stats-bar");
   
    statsDiv.forEach(stats => {
        stats.value = valoresBarra[cont++].base_stat;
    });

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

function alterarDescricao(pkmDesc) {

    let pkmDescricao = document.querySelector(".pokemon-text");
    pkmDescricao.textContent = pkmDesc;
}

