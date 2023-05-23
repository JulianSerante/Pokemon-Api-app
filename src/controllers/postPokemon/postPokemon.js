const { Pokemon, Type } = require('../../db');

const postPokemon = async (name, image, hp, attack, defense, speed, height, weight, typeIds) => {
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
            image,
            hp,
            attack,
            defense,
            speed,
            height, 
            weight,
          }
        );

        for(const typeId of typeIds){
          const type = await Type.findByPk(typeId);
          if(type) await newPokemon.addType(type);
        }  
        return newPokemon;
        
      } catch (error) {
        return { error: error.message };
      }
    };




module.exports = postPokemon

