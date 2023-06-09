const axios = require('axios');
const { ENDPOINT } = process.env;

const getPokemonFromAPI = async () => {
        const limit = 20;
        let offset = 0;
        let pokemonCount = 0;
        let pokemons = [];

        const countResponse = await axios.get(ENDPOINT);
        pokemonCount = countResponse.data.count;

        while (offset < pokemonCount && pokemons.length < 61) {
            const response = await axios.get(`${ENDPOINT}?offset=${offset}&limit=${limit}`);
            const pokemonList = response.data.results;
            const promises = pokemonList.map(pokemon => axios.get(pokemon.url));
            const responses = await Promise.all(promises);
            const groupOfPokemons = responses.map(response => response.data);
      
            pokemons = [...pokemons, ...groupOfPokemons];
            offset += limit;
          } 
          
          const pokemonApi = pokemons.slice(0, 60).map(pokemon => {
            const { id, name, sprites, stats, height, weight, types } = pokemon;
            const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
            const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
            const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;
            const speed = stats.find(stat => stat.stat.name === 'speed').base_stat;
            const type = types.map(typePokemon => {
                return typePokemon.type
            }
        )
            
            if(!id || !name || !sprites || !hp || !attack || !defense) throw new Error ('No se encontró la información esencial del Pokémon');

            return {
                id,
                name,
                types: type,
                image: sprites.other['official-artwork'].front_default,
                hp,
                attack,
                defense,
                speed,
                height: height,
                weight: weight, 
                created: false
            };
          });
          return pokemonApi;
}

module.exports = getPokemonFromAPI;