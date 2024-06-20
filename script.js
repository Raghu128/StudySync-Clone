const cards = document.querySelectorAll('.card')
const testimonialCard = document.querySelectorAll('.testimonail-card');

console.log(testimonialCard);

window.addEventListener('scroll', checkbox);

checkbox();

function checkbox() {
    const triggerbottom = window.innerHeight/4 * 4;

    cards.forEach((card) => {
        const boxtop = card.getBoundingClientRect().top;

        if(boxtop < triggerbottom) {
            card.classList.add('show');
        }
    })


    testimonialCard.forEach((card) => {
        const boxtop = card.getBoundingClientRect().top;

        if(boxtop < triggerbottom) {
            card.classList.add('show');
        }
    })
}