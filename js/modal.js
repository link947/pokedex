function openModal(index) {
    const pokemon = currentPokemonList[index];
    modalInfo.innerHTML = renderModalContent(pokemon);
    const typeClass = pokemon.types[0].toLowerCase();
    modalContent.className = `modal-content type-${typeClass} pixel-corners`;
    pokemonModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateProgressBars(pokemon);
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

function playCry(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play();
}

function showInfoSection() {
    document.getElementById('stats-section').style.display = 'none';
    document.getElementById('info-section').style.display = 'block';
    document.getElementById('next-section-btn').style.opacity = '.5';
    document.getElementById('prev-section-btn').style.opacity = '1';
    document.getElementById('next-section-btn').disabled = true;
    document.getElementById('prev-section-btn').disabled = false;
}

function showStatsSection() {
    document.getElementById('info-section').style.display = 'none';
    document.getElementById('stats-section').style.display = 'block';
    document.getElementById('prev-section-btn').style.opacity = '.5';
    document.getElementById('next-section-btn').style.opacity = '1';
    document.getElementById('prev-section-btn').disabled = true;
    document.getElementById('next-section-btn').disabled = false;
}

function animateProgressBar(statValue, elementId) {
    let currentValue = 0;
    const progressBarFill = document.getElementById(elementId);
    progressBarFill.style.width = '0%';
    const interval = setInterval(() => {
        if (currentValue >= statValue) {
            clearInterval(interval);
        } else {
            currentValue++;
            const percentage = (currentValue / 255) * 100;
            progressBarFill.style.width = `${percentage}%`;
        }
    }, 10);
}

function updateProgressBars(pokemon) {
    const hpValue = pokemon.stats.hp;
    const attackValue = pokemon.stats.attack;
    const defenseValue = pokemon.stats.defense;
    animateProgressBar(hpValue, 'hp-bar');
    animateProgressBar(attackValue, 'attack-bar');
    animateProgressBar(defenseValue, 'defense-bar');
}