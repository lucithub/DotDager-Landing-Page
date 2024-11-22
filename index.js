let isCardVisible = false;

function showPr() {
    const cardContainer = document.getElementById("cardContainerPr");

    if (isCardVisible) {
        cardContainer.innerHTML = "";
        isCardVisible = false;
    } else {
        cardContainer.innerHTML = `
            <div class="card text-white bg-dark" style="max-width: 30rem; margin: 0 auto;">
                <div class="card-header text-center fs-4" id="cardPrT">💻 Programming</div>
                <div class="card-body">
                    <h5 class="card-title">Why I Love Programming</h5>
                    <p class="card-text">
                        Programming is like solving an infinite puzzle where you create the pieces. 
                        That's how big my pickle is! It blends logic and creativity perfectly: 
                        one day I'm planning algorithms, and the next, I'm questioning my choices. 
                        It's incredibly fulfilling to see the impact of your creations, from small apps to major projects, like a pickle clicker (coming soon!). 
                    </p>
                </div>
            </div>
        `;
        const card = cardContainer.querySelector('.card');
        card.style.opacity = 0;
        card.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => (card.style.opacity = 1), 50);
        isCardVisible = true;
    }
}
function showC(){
    const cardContainer = document.getElementById("cardContainerC");

    if (isCardVisible) {
        cardContainer.innerHTML = "";
        isCardVisible = false;
    } else {
        cardContainer.innerHTML = `
            <div class="card text-white bg-dark" style="max-width: 30rem; margin: 0 auto;">
                <div class="card-header text-center fs-4" id="cardCT">🐱 Cats</div>
                <div class="card-body">
                    <h5 class="card-title">Cats</h5>
                    <p class="card-text">
                        Cats are the best! They are the most adorable creatures in the world. 
                        They're fluffy, cute, and always breaking something. 
                        They are the perfect companions and are always there to laugh at you when you are trying to center a div for 3 hours.
                    </p>
                </div>
            </div>
        `;
        const card = cardContainer.querySelector('.card');
        card.style.opacity = 0;
        card.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => (card.style.opacity = 1), 50);
        isCardVisible = true;
    }
}
function showG(){
    const cardContainer = document.getElementById("cardContainerG");

    if (isCardVisible) {
        cardContainer.innerHTML = "";
        isCardVisible = false;
    } else {
        cardContainer.innerHTML = `
            <div class="card text-white bg-dark" style="max-width: 30rem; margin: 0 auto;">
                <div class="card-header text-center fs-4" id="cardGT">🎸 Guitars</div>
                <div class="card-body">
                    <h5 class="card-title">Guitars</h5>
                    <p class="card-text">
                        Guitars are the best! They are the loudest instruments in the world. They give rise to one of our favorite Argentinian activities: Guitarrearla.
                    </p>
                </div>
            </div>
        `;
        const card = cardContainer.querySelector('.card');
        card.style.opacity = 0;
        card.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => (card.style.opacity = 1), 50);
        isCardVisible = true;
    }
}
function showPi(){
    const cardContainer = document.getElementById("cardContainerPi");
    if (isCardVisible) {
        cardContainer.innerHTML = "";
        isCardVisible = false;
    } else {
        cardContainer.innerHTML = `
            <div class="card text-white bg-dark" style="max-width: 30rem; margin: 0 auto;">
                <div class="card-header text-center fs-4" id="cardPiT">🥒 Pickles</div>
                <div class="card-body">
                    <h5 class="card-title">Pickles</h5>
                    <p class="card-text">
                        My favorite section! They are the most delicious food in the world. They are the perfect snack and are always there to make you happy, at any time, it is versatile, you can eat it anywhere, in any way, and you can do whatever you want, the only limit is your mind! Sorry, I have to go to the bathroom for a moment.
                    </p>
                </div>
            </div>
        `;
        const card = cardContainer.querySelector('.card');
        card.style.opacity = 0;
        card.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => (card.style.opacity = 1), 50);
        isCardVisible = true;
    }
}
function showPh(){
    const cardContainer = document.getElementById("cardContainerPh");

    if (isCardVisible) {
        cardContainer.innerHTML = "";
        isCardVisible = false;
    } else {
        cardContainer.innerHTML = `
            <div class="card text-white bg-dark" style="max-width: 30rem; margin: 0 auto;">
                <div class="card-header text-center fs-4" id="cardPhT">📚 Philosophy</div>
                <div class="card-body">
                    <h5 class="card-title">Philosophy</h5>
                    <p class="card-text">
                        Philosophy is the best! It is the most interesting topic...... Sorry, I fell asleep.
                    </p>
                </div>
            </div>
        `;
        const card = cardContainer.querySelector('.card');
        card.style.opacity = 0;
        card.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => (card.style.opacity = 1), 50);
        isCardVisible = true;
    }
}

document.getElementById("magicButton").addEventListener("click", () => {
    gsap.to(".magic-button", {
        duration: 0.6,
        scale: 1.1,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
        onComplete: () => {
            gsap.to(".magic-button", {
                scale: 1,
            });
        },
    });
});
