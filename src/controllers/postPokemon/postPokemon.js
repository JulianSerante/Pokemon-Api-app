const { Pokemon, Type } = require('../../db');

const postPokemon = async (name, sprites, hp, attack, defense, speed, height, weight, typeIds) => {
    try {
        const lastPokemon = await Pokemon.findOne({
          order: [['id', 'DESC']],
        });
    
        let nextId = 10000;
    
 
        if (lastPokemon) {
          nextId = parseInt(lastPokemon.id) + 1;
        }
    
        const newPokemon = await Pokemon.create(
          {
            id: nextId,
            name,
            sprites,
            hp,
            attack,
            defense,
            speed,
            height, 
            weight,
          }
        );

        await newPokemon.addType(typeIds);
        
        return newPokemon;
      } catch (error) {
        return { error: error.message };
      }
    };




module.exports = postPokemon

