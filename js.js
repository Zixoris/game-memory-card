"use strict"

/**
 *
 */



let game = {
    cardsName: ["armchair", "bullfighter", "coffeMashine", "lens", "protectSmartphone", "scooter", "smartphone", "tripod",
              "watch", "woman"],
    cardsCount: null,
    cards: null,


    cloneCardsID: ["armchair", "bullfighter", "coffeMashine", "lens", "protectSmartphone", "scooter", "smartphone",
                   "tripod", "watch", "woman"],
    init() {
        let game = document.getElementById('game');
        this.cardsCount = this.cardsName.length;


        for (let i = 0; i < 2 * this.cardsCount; i++) {
            let divCard = document.createElement('div');
            divCard.classList = 'card';
            let imageCard = new Image;
            imageCard.src = 'img/armchair.jpg';
            divCard.appendChild(imageCard);
            game.appendChild(divCard);
            imageCard.setAttribute('style', 'opacity: 0');
            imageCard.addEventListener('click', function () {
                imageCard.setAttribute('style', 'opacity: 1');
                setTimeout(function () {
                    imageCard.setAttribute('style', 'opacity: 0')
                }, 1000);
            });
        }

    },

    showCard(event) {
        let cardEl = event.target;
        cardEl.setAttribute('style', 'opacity: 1')
        setTimeout(function () {
            cardEl.setAttribute('style', 'opacity: 0')
        }, 1000)
    },


}

window.onload = game.init();
