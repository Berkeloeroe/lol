/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
let menuOpenButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuOpenButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav

function openMenu() {
    let deNav = document.querySelector("nav");
    deNav.classList.add("is-open");

}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
let menuSluitButton = document.querySelector("header nav button");


// stap 2 - laat die button luisteren naar kliks
menuSluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
    let deNav = document.querySelector("nav");
    deNav.classList.remove("is-open");

}

