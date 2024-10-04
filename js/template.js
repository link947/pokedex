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
    const pokemonCry = `https://veekun.com/dex/media/pokemon/cries/${pokemon.id}.ogg`;
    return /*HTML*/`
    <div class="pixel-corners-2 sound-btn" onclick="playCry('${pokemonCry}')"><img src="assets/icons/sound-on.png" alt=""></div>
        <img class="modal-img" src="${gifImage}" alt="${pokemon.name}">
        <div class="modal-nav-buttons">
            <button id="prev-section-btn" class="pixel-corners-2" onclick="showStatsSection()" style="opacity: .5;" disabled><img src="assets/icons/stats-icon.png" alt=""></button>
            <button id="next-section-btn" class="pixel-corners-2" onclick="showInfoSection()"><img src="assets/icons/i-icon.png" alt=""></button>
        </div>
        ${renderTypeIcons(pokemon)}
        <div class="modal-slider">
            <div class="modal-section" id="stats-section">
                <div class="stats">
                    <div class="statbar-container"><span class="pixel-corners-2">HP</span><div class="custom-progress-bar pixel-corners-2"><div class="custom-progress-bar-fill" style="width: 0%;" id="hp-bar"></div></div></div>
                    <div class="statbar-container"><span class="pixel-corners-2">Attack</span><div class="custom-progress-bar pixel-corners-2"><div class="custom-progress-bar-fill" style="width: 0%;" id="attack-bar"></div></div></div>
                    <div class="statbar-container"><span class="pixel-corners-2">Defense</span><div class="custom-progress-bar pixel-corners-2"><div class="custom-progress-bar-fill" style="width: 0%;" id="defense-bar"></div></div></div>
                </div>
            </div>
            <div class="modal-section" id="info-section" style="display: none;">
                <div class="pokemon-info pixel-corners-2">
                    <p>${pokemon.flavorText}</p>
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