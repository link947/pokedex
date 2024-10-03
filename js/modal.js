function openModal(index) {
    const pokemon = currentPokemonList[index];
    modalInfo.innerHTML = renderModalContent(pokemon);
    const typeClass = pokemon.types[0].toLowerCase();
    modalContent.className = `modal-content type-${typeClass} pixel-corners`;
    pokemonModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    animateProgressBar(pokemon.stats.hp, 'hp-bar');
    animateProgressBar(pokemon.stats.attack, 'attack-bar');
    animateProgressBar(pokemon.stats.defense, 'defense-bar');
    currentIndex = index;
    updateNavigationButtons();    
}

function nextPokemon() {
    if (currentIndex < currentPokemonList.length - 1) {
        currentIndex++;
        openModal(currentIndex);
    }
}

function prevPokemon() {
    if (currentIndex > 0) {
        currentIndex--;
        openModal(currentIndex);
    }
}

function closeModal() {
    pokemonModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateNavigationButtons() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    if (currentIndex === currentPokemonList.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}
