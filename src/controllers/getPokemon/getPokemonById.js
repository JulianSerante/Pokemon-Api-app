const axios = require('axios');
const { ENDPOINT } = process.env;

const getPokemonById = async (id) => {
    try {
        if(!id) throw new Error('El id es necesario');
        
        const { data } = await axios(`${ENDPOINT}/${id}`);
        if(!data.name) throw new Error(`Faltan datos del Pokemon con id: ${id}`);

        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
        const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
        const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
        const type = data.types.map(typePokemon => {
                return typePokemon.type
            })
        

        const pokemon = {
            id: data.id,
            name: data.name.toUpperCase(),
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

module.exports = getPokemonById;