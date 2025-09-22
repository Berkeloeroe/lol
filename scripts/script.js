console.log("Test Test");

const newJokeButton = document.querySelector("main button");
const newJokeDialog = document.querySelector("main dialog");

newJokeButton.addEventListener("click", () => {
	// STAP 1.
	// JOUW CODE HIER
	// 1.1 open de dialog met showModal()
newJokeDialog.showModal();

	
});

 const openBtn = document.querySelector('.open-menu');
        const closeBtn = document.querySelector('.close-menu');
        const nav = document.querySelector('.main-nav');
        const overlay = document.querySelector('.overlay');

        openBtn.addEventListener('click', () => {
            nav.classList.add('open');
            overlay.classList.add('show');
            nav.setAttribute('aria-hidden', 'false');
        });

        closeBtn.addEventListener('click', () => {
            nav.classList.remove('open');
            overlay.classList.remove('show');
            nav.setAttribute('aria-hidden', 'true');
        });

        overlay.addEventListener('click', () => {
            nav.classList.remove('open');
            overlay.classList.remove('show');
            nav.setAttribute('aria-hidden', 'true');
        });
