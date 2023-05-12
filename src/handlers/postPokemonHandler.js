const postPokemon = require('../controllers/postPokemon/postPokemon');

const postPokemonHandler = async (req, res) => {
    try {
        const {name, image, hp, attack, defense, speed, height, weight, typeIds} = req.body;
        const newPokemon = await postPokemon(name, image, hp, attack, defense, speed, height, weight, typeIds);
        return res.status(201).json(newPokemon)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }

    
    
}

module.exports = postPokemonHandler;