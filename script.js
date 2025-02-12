const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

function launchConfetti() {
    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
    });

    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.center-box');
    const text = document.querySelector('.text');
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const gif = document.querySelector('.gif-container')
    const btnContainer = document.querySelector('.button-container');

    if (box && yesBtn && noBtn) {
        const wrapperRect = box.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        yesBtn.addEventListener('click', () => {
            text.innerHTML = 'Heh!, pag shave daan</br>Hehehehhehe</br> Lapyoo :))';
            gif.style.backgroundImage = "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB1ZGc0bzVjZnpvZDY1eG1zbGVkM21hdjJlajJ5NDVubGhtazMxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IdRpSgQ8D2C8H1n9XD/giphy.gif)"
            launchConfetti();
            btnContainer.style.display = 'none';
        });

        noBtn.addEventListener('mouseover', () => {
            const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
            const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

            noBtn.style.position = 'absolute'; // Ensure it's absolutely positioned
            noBtn.style.left = i + 'px';
            noBtn.style.top = j + 'px';
        });
    }
});
