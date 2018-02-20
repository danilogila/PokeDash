const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

//Quando o usuário clica no <span> (x), fecha o modal trocando a classe.
span.onclick = function() {
    modal.classList.toggle("modal-active");
}

//Quando o usuário clica fora do modal, fecha o modal trocando a classe.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.toggle("modal-active");
    }
}