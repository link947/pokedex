let offset = 0;
const limit = 20;
const pokemonContainer = document.getElementById('pokemon-container');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadingScreen = document.getElementById('loading-screen');
const pokemonModal = document.getElementById('pokemon-modal');
const modalContent = document.getElementById('modal-content');
const modalInfo = document.getElementById('modal-info');
const searchInput = document.getElementById('search-bar');
let currentPokemonList = [];
let currentIndex = 0;

async function fetchPokemonData() {
    try {
        createClouds(10);
        showLoading();
        loadMoreBtn.disabled = true;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
            const result = data.results[i];
            const pokemonDetails = await fetchPokemonDetails(result.url);
            currentPokemonList.push(pokemonDetails);
            renderPokemonCard(pokemonDetails, i + offset);
        }
        offset += limit;
        hideLoading();
        loadMoreBtn.disabled = false;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    const pokemon = await response.json();    
    return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(typeInfo => typeInfo.type.name),
        stats: {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
        },
        image: pokemon.sprites.front_default,
    };
}

function showLoading() {
    loadingScreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    loadingScreen.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function loadMore() {
    fetchPokemonData();
};

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPokemon = currentPokemonList.filter(pokemon => 
        pokemon.name.includes(searchTerm)
    );
    renderSearchedCards(filteredPokemon);
});

function renderSearchedCards(filteredPokemon) {
    pokemonContainer.innerHTML = '';
    for (let i = 0; i < filteredPokemon.length; i++) {
        renderPokemonCard(filteredPokemon[i], filteredPokemon[i].id - 1);
    }
}

function playCry(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play();
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

function createClouds(numClouds) {
    const cloudContainer = document.getElementById('cloud-container');
    const documentHeight = document.documentElement.scrollHeight;     
    for (let i = 0; i < numClouds; i++) {
      const cloud = document.createElement('img');
      cloud.src = 'assets/img/cloud.png';
      cloud.classList.add('cloud');
      const size = Math.random() * 100 + 100;
      const topPos = Math.random() * documentHeight * 2;
      const speed = Math.random() * 50 + 20;
      cloud.style.width = `${size}px`;
      cloud.style.top = `${topPos}px`;
      cloud.style.animationDuration = `${speed}s`;
      cloudContainer.appendChild(cloud);
    }
  }