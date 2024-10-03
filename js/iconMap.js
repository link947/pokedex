const typeIconMap = {
    bug: 'assets/icons/bug.png',
    dark: 'assets/icons/dark.png',
    dragon: 'assets/icons/dragon.png',
    electric: 'assets/icons/electric.png',
    fairy: 'assets/icons/fairy.png',
    fighting: 'assets/icons/fighting.png',
    fire: 'assets/icons/fire.png',
    flying: 'assets/icons/flying.png',
    ghost: 'assets/icons/ghost.png',
    grass: 'assets/icons/grass.png',
    ground: 'assets/icons/ground.png',
    ice: 'assets/icons/ice.png',
    normal: 'assets/icons/normal.png',
    poison: 'assets/icons/poison.png',
    psychic: 'assets/icons/psychic.png',
    rock: 'assets/icons/rock.png',
    steel: 'assets/icons/steel.png',
    water: 'assets/icons/water.png',
    default: 'assets/icons/default.png'
};

function getTypeIcon(type) {
    return typeIconMap[type] || typeIconMap['default'];
}