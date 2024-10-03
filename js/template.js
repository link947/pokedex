function renderPokemonCard(pokemon, index) {
    const typeClass = pokemon.types[0];
    
    pokemonContainer.innerHTML += /*HTML*/`
    <div class="pokemon-card pixel-corners type-${typeClass}" onclick="openModal(${index})">
        <div class="id-number">
            <p class="pixel-corners-2">#${pokemon.id}</p>
        </div>
        <img src="${pokemon.image}" alt="${pokemon.name}">
            ${renderTypeIcons(pokemon)}
        <div class="texture"></div>
    </div>
    `;
}

function renderModalContent(pokemon) {
    const gifImage = `https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`;
    return /*HTML*/`
        <img class="modal-img" src="${gifImage}" alt="${pokemon.name}">
        ${renderTypeIcons(pokemon)}
        <div class="stats">
            <div class="statbar-container"><span>HP: </span><progress class="pixel-corners-2" id="hp-bar" value="0" max="255"></progress></div>
            <div class="statbar-container"><span>Attack: </span><progress class="pixel-corners-2" id="attack-bar" value="0" max="255"></progress></div>
            <div class="statbar-container"><span>Defense: </span><progress class="pixel-corners-2" id="defense-bar" value="0" max="255"></progress></div>
        </div>
    `;
}

function renderTypeIcons(pokemon) {
    const typeOneIcon = getTypeIcon(pokemon.types[0]);
    let typeTwoIcon = getTypeIcon('default');
    
    if (pokemon.types[1]) {
        typeTwoIcon = getTypeIcon(pokemon.types[1]);
    }

    return /*HTML*/`
        <div class="pokemon-types pixel-corners">
            <img class="type-icon" src="${typeOneIcon}">
            <h3>${pokemon.name}</h3>
            <img class="type-icon" src="${typeTwoIcon}">
        </div>
    `;
}