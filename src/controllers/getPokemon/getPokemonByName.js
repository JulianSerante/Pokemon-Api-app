const axios = require('axios');
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonByName = async (name) => {
    try {

        const { data } = await axios(`${ENDPOINT}/${name.toLowerCase()}`);
        if(!data.name) throw Error(`El Pokemon con nombre ${name} no existe`);

        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
        const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
        const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
        const type = data.types.map(typePokemon => {
            return typePokemon.type
        })

        const pokemon = {
            id: data.id,
            name: data.name,
            types: type,
            image: data.sprites.other['official-artwork'].front_default,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            height: data.height,
            weight: data.weight
        }
        return pokemon;
        
    } catch (error) {
        return {error: error.message};
    }
};


module.exports = getPokemonByName;