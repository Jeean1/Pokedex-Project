

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const PokemonItem = ({ pokemonUrl }) => {


    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate()


    useEffect(() => {

        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))

    }, [pokemonUrl])

    // console.log(pokemon)



    const changeColorType = () => {

        const typePokemon = pokemon.types?.[0].type.name

        let color = ''

        if (typePokemon === "fire") {
            color = 'linear-gradient(178.92deg, #E6901E 0.92%, #ABDAC6 47.96%, #E75C35 99.08%)'

        }

        else if (typePokemon === 'grass') {
            color = 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)'
        }

        else if (typePokemon === 'ghost') {
            color = 'linear-gradient(178.92deg, #5E0F77 0.92%, #ABDAC6 47.96%, #990995 99.08%)'
        }

        else if (typePokemon === 'water') {
            color = 'linear-gradient(178.92deg, #0061E2 0.92%, #ABDAC6 47.96%, #6582E8 99.08%)'
        }

        else if (typePokemon === 'bug') {
            color = 'linear-gradient(178.92deg, #50DA5F 0.92%, #ABDAC6 47.96%, #65E88F 99.08%)'
        }

        else if (typePokemon === 'normal') {
            color = 'linear-gradient(178.92deg, #E5F5B3 0.92%, #ABDAC6 47.96%, #EFE1A1 99.08%)'
        }

        else if (typePokemon === 'fighting') {
            color = 'linear-gradient(178.92deg, #CE1B1B 0.92%, #ABDAC6 47.96%, #953D3D 99.08%)'
        }

        else if (typePokemon === 'flying') {
            color = 'linear-gradient(178.92deg, #5696C0 0.92%, #ABDAC6 47.96%, #42708A 99.08%)'
        }

        else if (typePokemon === 'poison') {
            color = 'linear-gradient(178.92deg, #BC09E0 0.92%, #ABDAC6 47.96%, #4E005E 99.08%)'
        }

        else if (typePokemon === 'ground') {
            color = 'linear-gradient(178.92deg, #9DA43C 0.92%, #ABDAC6 47.96%, #D2D66C 99.08%)'
        }

        else if (typePokemon === 'rock') {
            color = 'linear-gradient(178.92deg, #5E3F06 0.92%, #ABDAC6 47.96%, #8F6B29 99.08%)'
        }

        else if (typePokemon === 'steel') {
            color = 'linear-gradient(178.92deg, #716B6B 0.92%, #ABDAC6 47.96%, #B1A6A6 99.08%)'
        }

        else if (typePokemon === 'psychic') {
            color = 'linear-gradient(178.92deg, #DF106C 0.92%, #ABDAC6 47.96%, #FF0071 99.08%)'
        }

        else if (typePokemon === 'ice') {
            color = 'linear-gradient(178.92deg, #00C6FF 0.92%, #ABDAC6 47.96%, #33B2D6 99.08%)'
        }

        else if (typePokemon === 'dragon') {
            color = 'linear-gradient(178.92deg, #0C007D 0.92%, #ABDAC6 47.96%, #443C8F 99.08%)'
        }

        else if (typePokemon === 'dark') {
            color = 'linear-gradient(178.92deg, #06022A 0.92%, #ABDAC6 47.96%, #211F32 99.08%)'
        }

        else if (typePokemon === 'fairy') {
            color = 'linear-gradient(178.92deg, #FF9DE4 0.92%, #ABDAC6 47.96%, #FFCBF1 99.08%)'
        }

        else if (typePokemon === 'electric') {
            color = 'linear-gradient(178.92deg, #FFF600 0.92%, #ABDAC6 47.96%, #EBE660 99.08%)'
        }




        else {
            color = ''
        }


        return color

    }





    return (
        <>

            <div className='card_pokemon' onClick={() => navigate(`${pokemon.id}`)} style={{ background: changeColorType() }}>


                <div className='pokemonImg_div'>

                    <img src={pokemon.sprites?.other.dream_world.front_default} style={{ width: '100%', height: '100%' }} />

                </div>


                <div className='stats_div'>




                    <div className='name_type_div'>
                        <h3>{pokemon.name}</h3>

                        <p>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</p>

                        <span>Type</span>


                    </div>

                    <div className='pokemon_stats_div'>



                        <div className='stats_individual_div'>

                            <p>hp</p>
                            <span>{pokemon.stats?.[0].base_stat}</span>

                        </div>

                        <div className='stats_individual_div'>

                            <p>attack</p>
                            <span>{pokemon.stats?.[1].base_stat}</span>

                        </div>

                        <div className='stats_individual_div'>

                            <p>defense</p>
                            <span>{pokemon.stats?.[2].base_stat}</span>

                        </div>

                        <div className='stats_individual_div'>

                            <p>speed</p>
                            <span>{pokemon.stats?.[5].base_stat}</span>

                        </div>




                    </div>



                </div>

            </div>

        </>
    );
};

export default PokemonItem;