const generateResponse = Math.floor(Math.random() * 10);

function startGame() {
    let cssElement = document.getElementById("elementCSS");
    cssElement.className = "alert false";
    cssElement.addEventListener('click', guessNumber);
}


function guessNumber() {
    let docElement = document.getElementById("elementCSS");
    let response = parseInt(window.prompt("Entrez le nombre à trouver : "));

    if (response !== generateResponse)
    {
        if (response > generateResponse)
        {
            docElement.value = "Dommage, le numéro est trop grand, re-essaie !";
        }
        else if (response < generateResponse)
        {
            docElement.value = "Dommage, le numéro est trop petit, re-essaie !";
        }
    } else {
        docElement.value = "Félicitations ! La réponse était bien " + response;
        docElement.className = "alert correct";
    }

}

function isInteger(value) {
    // Le principe de cette fonction est de vérifier si la valeur entrée est bien un entier
    // Dans le cas échéant, il faut renvoyer une erreur
}