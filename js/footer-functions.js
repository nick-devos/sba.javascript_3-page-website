var cart = [['The Last of Us: Part II', 0], ['Ghost of Tsushima', 0], ['Cyberpunk 2077', 0], ['Detroit Become Human', 0], ['Spyro Reignited Trilogy', 0],
            ['Need For Speed Heat', 0], ['Call of Duty Modern Warfare', 0], ['MLB The Show 20', 0], ['Marvels Spider-Man Game of the Year Edition', 0]];

function addToCart(evt) {
    console.log(evt);
    switch(evt) {
        case 'btn-lastOfUsPart2': cart[0][1]++;
            break;
        case 'btn-ghostOfTsushima': cart[1][1]++;
            break;
        case 'btn-cyberpunk2077': cart[2][1]++;
            break;
        case 'btn-detroitBecomeHuman': cart[3][1]++;
            break;
        case 'btn-spyroReignitedTrilogy': cart[4][1]++;
            break;
        case 'btn-needForSpeedHeat': cart[5][1]++;
            break;
        case 'btn-callOfDutyModernWarfare': cart[6][1]++;
            break;
        case 'btn-mlbTheShow20': cart[7][1]++;
            break;
        case 'btn-marvelsSpiderManGoty': cart[8][1]++;
            break;
        default: alert('Mismatched Names');
            break;
    }
console.log(cart);
}

