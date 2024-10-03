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
            <div class="statbar-container">
                <span class="pixel-corners-2">HP</span>
                <div class="custom-progress-bar pixel-corners-2">
                    <div id="hp-bar" class="custom-progress-bar-fill" style="width: 0;"><span></span></div>
                </div>
            </div>
            <div class="statbar-container">
                <span class="pixel-corners-2">Attack</span>
                <div class="custom-progress-bar pixel-corners-2">
                    <div id="attack-bar" class="custom-progress-bar-fill" style="width: 0;"></div>
                </div>
            </div>
            <div class="statbar-container">
                <span class="pixel-corners-2">Defense</span>
                <div class="custom-progress-bar pixel-corners-2">
                    <div id="defense-bar" class="custom-progress-bar-fill" style="width: 0;"></div>
                </div>
            </div>
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