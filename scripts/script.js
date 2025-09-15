console.log("Test Test");

// popup
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

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
