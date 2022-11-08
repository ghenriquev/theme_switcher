let button = document.getElementById("ball");
let body = document.body;

function mudarTema(){
    body.classList.toggle("active");
}

button.addEventListener("click", mudarTema)