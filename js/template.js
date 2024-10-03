function renderPokemonCard(pokemon, index) {
    const typeClass = pokemon.types[0];
    const typeOneIcon = getTypeIcon(pokemon.types[0]);
    let typeTwoIcon;
    if (pokemon.types[1]) {
        typeTwoIcon = getTypeIcon(pokemon.types[1]);
    } else {
        typeTwoIcon = getTypeIcon('default');
    }
    pokemonContainer.innerHTML += /*HTML*/`
    <div class="pokemon-card pixel-corners type-${typeClass}" onclick="openModal(${index})">
        <div class="id-number">
            <p class="pixel-corners-2">#${pokemon.id}</p>
        </div>
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <div class="pokemon-types pixel-corners">
            <img class="type-icon" src="${typeOneIcon}">
            <h3>${pokemon.name}</h3>
            <img class="type-icon" src="${typeTwoIcon}">
        </div>
        <div class="texture"></div>
    </div>
    `;
}

function renderModalContent(pokemon) {
    const gifImage = `https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`;
    return /*HTML*/`
        <img src="${gifImage}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>HP: ${pokemon.stats.hp}</p>
        <p>Attack: ${pokemon.stats.attack}</p>
        <p>Defense: ${pokemon.stats.defense}</p>
    `;
}