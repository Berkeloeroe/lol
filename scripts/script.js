console.log("Test Test");

const newJokeButton = document.querySelector("main button");
const newJokeDialog = document.querySelector("main dialog");

newJokeButton.addEventListener("click", () => {
    // STAP 1.
    // JOUW CODE HIER
    // 1.1 open de dialog met showModal()
    newJokeDialog.showModal();
});

/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
let menuOpenButton = document.querySelector("header > button:last-of-type");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuOpenButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav

function openMenu() {
    let deNav = document.querySelector("header > div");
    deNav.classList.add("is-open");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
let menuSluitButton = document.querySelector("header div button");


// stap 2 - laat die button luisteren naar kliks
menuSluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
    let deNav = document.querySelector("header > div");
    deNav.classList.remove("is-open");

}

// video pauze knop
// https://codepen.io/shooft/pen/MYKjaXd
let videoButton = document.querySelector("video + button");
let videoButtonImg = document.querySelector("button img");

let deVideo = document.querySelector("video");


videoButton.addEventListener("click", toggleVideo);

function toggleVideo() {
	
	if( deVideo.paused == true ) {
		deVideo.play();
		// videoButton.textContent = "pauze";
		videoButtonImg.src = "images/pause.png";
		videoButtonImg.alt = "pauze";
		
	} else {
		deVideo.pause();
		// videoButton.textContent = "play";
		
		videoButtonImg.src = "images/play.png";
		videoButtonImg.alt = "play";
	}
	

}