

function buscarPokemon(id){
    
        
            const endpoint = "https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/";
            const URL = endpoint + id;
            console.log(URL);

            fetch(URL)
            .then((resp) => resp.json()) 
            .then(function(data){

                console.log(data);
                getData(data);
            })               
            .catch(function(error) {

              console.log(error);
              console.log("Errrouuuuu");
            }); 
            
}
    
function getData(data){


    let pokemonObj = {
        name: data.name,
        id: data.id,
        abilities : data.abilities,
        height : data.height,
        weight : data.weight,
        image: data.sprites,
        tipos: data.types
    }

    alterarHabilidades(...pokemonObj.abilities);
    alterarCategorias(...pokemonObj.tipos);
    alterarFoto(pokemonObj.image);
    alterarAtributos(pokemonObj.height, pokemonObj.weight);
    alterarNome(pokemonObj.name);
    alterarDescricao(pokemonObj.id);

}
    
function alterarHabilidades(...abilities){

//Com essa função eu faço a inserção das habilidades do Pokemon no select do mesmo

let qtdAbilidades = abilities.length;
let abilitiesList = abilities;
let selectHabilidades = document.querySelector("#pkmHabilidades");

// console.log(abilitiesList);

selectHabilidades.options.length = 0;

for(let i = 0; i < qtdAbilidades; i++){

        // console.log(abilitiesList["0"].ability.name);
        // console.log(abilitiesList["1"].ability.name);
        let newOption = document.createElement("option");
        newOption.text = (abilitiesList[i].ability.name);
        selectHabilidades.options.add(newOption);
    
    }
}

function alterarFoto(imgAtt){

    // console.log(imgAtt.front_default);
    let pokemonPicture = document.querySelector(".pokemon-picture");
    pokemonPicture.src = imgAtt.front_default;
}

function alterarAtributos(height, weight){
    
     let pkmHeight = document.querySelector(".height-value");
     pkmHeight.textContent = height;
     
     let pkmWeight = document.querySelector(".weight-value");
     pkmWeight.textContent = weight;

     return pkmHeight, pkmWeight;
}

function alterarCategorias(categorias){

    let pkmCategotia = document.querySelector(".category-value");
    pkmCategotia.textContent = categorias.type.name;
    
    return pkmCategotia;
}

function alterarNome(name){
    let pkmName = document.querySelectorAll(".pokemon-name");
    let TAM = pkmName.length;

    for(let i = 0; i < TAM; i++){
        pkmName[i].textContent = name;
    }

    // console.log(pkmName);

    
    return pkmName;
}

function alterarDescricao(id){

    console.log(id);
    let URL = "http://pokeapi.co/api/v2/pokemon-species/"+id+"/flavor_text";

    console.log(URL);
}
    
    