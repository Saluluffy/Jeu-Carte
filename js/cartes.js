let status = false;
let status2 = false;

let openButton = document.getElementById("openClick");
let mixButton = document.getElementById("mixClick");
let resetButton = document.getElementById("resetClick");

let cardsArray = [];
let mixAddition = 0;
let resetAddition = 0;


for (let i = 1; i <= 52; i++) {
    cardsArray.push(i);
}

openButton.addEventListener("click", function () {
    if (status == false) {
        //Affichage des cartes
        for (let i = 0; i < cardsArray.length; i++) {
            let addImages = document.createElement("img");
            addImages.setAttribute("src", "images/" + cardsArray[i] + ".jpg");
            addImages.setAttribute("class", "card");
            document.getElementById("cardsBlock").appendChild(addImages);
        }
        //Mise à jour de l'information
        document.getElementById("info").classList.add('info');
        document.getElementById("info").innerText = "Le jeu est désormais ouvert";
        //Mise à jour du bouton
        document.getElementById('openClick').innerText = "Ranger le jeu"
        //Mise à jour du statut
        status = true;
    } else {
        //Mise à jour des cartes
        document.getElementById('cardsBlock').innerHTML = "";
        //Mise à jour de l'information
        document.getElementById("info").classList.remove('info');
        document.getElementById("info").innerText = "";
        //Mise à jour du bouton
        document.getElementById('openClick').innerText = "Ouvrir le jeu"
        //Mise à jour des compteurs
        mixAddition = 0;
        resetAddition = 0;
        //Mise à jour du statut
        status = false;
    }
});

mixButton.addEventListener("click", function () {
    if (status == true) {
        //Mélange du tableau
        mixArray(cardsArray);
        document.getElementById('cardsBlock').innerHTML = "";
        for (let i = 0; i < cardsArray.length; i++) {
            let addImages = document.createElement("img");
            addImages.setAttribute("src", "images/" + cardsArray[i] + ".jpg");
            addImages.setAttribute("class", "card");
            document.getElementById("cardsBlock").appendChild(addImages);
        }
        //Mise à jour du compteur
        mixAddition = mixAddition + 1;
        //Mise à jour de l'information
        document.getElementById("info").classList.add('info');
        document.getElementById('info').innerText = "Vous avez mélangé le jeu " + mixAddition + " fois.";
        status2 = true;
    } else {
        //Mise à jour de l'information
        document.getElementById("info").classList.add('info');
        document.getElementById('info').innerText = "Vous n'avez pas ouvert le jeu.";
    }
});

//Fonction de mélange
function mixArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

resetButton.addEventListener("click", function () {
    if (status == false) {
        //Mise à jour de l'information
        document.getElementById("info").classList.add('info');
        document.getElementById('info').innerText = "Vous n'avez pas ouvert le jeu.";
    } else {
        //Mise à jour de l'information
        if (status2 == false) {
            document.getElementById("info").classList.add('info');
            document.getElementById('info').innerText = "Vous n'avez pas mélangé le jeu.";
        } else {
            //Mise à jour du tableau
            cardsArray.sort(function(a, b) {
                return a - b
            })
            document.getElementById('cardsBlock').innerHTML = "";
            for (let i = 0; i < cardsArray.length; i++) {
                let addImages = document.createElement("img");
                addImages.setAttribute("src", "images/" + cardsArray[i] + ".jpg");
                addImages.setAttribute("class", "card");
                document.getElementById("cardsBlock").appendChild(addImages);
            }
            //Mise à jour du compteur
            resetAddition = resetAddition + 1;
            //Mise à jour de l'information
            document.getElementById("info").classList.add('info');
            document.getElementById('info').innerText = "Vous avez réinitialisé le jeu " + resetAddition + " fois.";
        }
    }
});