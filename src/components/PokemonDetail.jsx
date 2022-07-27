

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import image from '../img/pokedex.png'
import ProgressBar from './ProgressBar';
import { useNavigate, useParams } from 'react-router-dom';


const PokemonDetail = () => {



    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()


    useEffect(() => {


        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))

    }, [id])


    // console.log(pokemon)


    const changeColorType = (type) => {

        const typePokemon = type

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

            <nav>

                <div className='color1'>

                    <div className='color2'>.</div>

                    <div className='circle1_Pokedex'></div>

                    <div className='circle2_Pokedex'></div>


                    <div className='pokedex_logo_div'>
                        <img src={image} alt="" />
                    </div>


                </div>
            </nav>

            <div className='div_buttom_fixed' onClick={() => navigate(-1)}>
                <button>back</button>
            </div>

            <section>

                <div className="card_container_detail" >


                    <div className="card_detail" >

                        <div className='pokemonImg_div_detail' style={{ background: changeColorType(pokemon.types?.[0].type.name) }}>
                            <img src={pokemon.sprites?.other.dream_world.front_default} style={{ width: '100%', height: '100%' }} />
                        </div>


                        <div className='pokemonInfo_div_detail'>

                            <div className='div_ID'>

                                <h3>#{pokemon.id}</h3>

                            </div>

                            <div className='div_namePokemon'>
                                <h1>{pokemon.name}</h1>
                            </div>

                            <div className='div_weightHeight'>
                                <div className='div_WH'>

                                    <h3>Height</h3>
                                    {pokemon.height}

                                </div>

                                <div className='div_WH'>

                                    <h3>Weight</h3>
                                    {pokemon.weight}

                                </div>
                            </div>


                            <div className='div_type_skills'>


                                <div className='div_typeSkill_container'>

                                    <h3>type</h3>

                                    <div className='div_type_skill'>

                                        <div className='div_style_ts' style={{ background: changeColorType(pokemon.types?.[0].type.name) }}>
                                            {pokemon.types?.[0].type.name}
                                        </div>

                                        <div className='div_style_ts' style={{ background: changeColorType(pokemon.types?.[1]?.type.name) }}>
                                            {pokemon.types?.[1]?.type.name}
                                        </div>

                                    </div>

                                </div>

                                <div className='div_typeSkill_container'>

                                    <h3>skills</h3>

                                    <div className='div_type_skill'>

                                        <div className='div_style_ts'>

                                            {pokemon.abilities?.[0]?.ability.name}

                                        </div>

                                        <div className='div_style_ts'>

                                            {pokemon.abilities?.[1]?.ability.name}

                                        </div>

                                    </div>



                                </div>

                            </div>



                        </div>


                        <div className='stats_graph_container'>

                            <div className='graph_card'>

                                <h1>Stats</h1>

                                <div className='graph_div'>

                                    <h3>HP</h3>
                                    <ProgressBar bgcolor="orange" progress={pokemon.stats?.[0].base_stat} height={30} />

                                </div>

                                <div className='graph_div'>

                                    <h3>Attack</h3>
                                    <ProgressBar bgcolor="orange" progress={pokemon.stats?.[1].base_stat} height={30} />

                                </div>

                                <div className='graph_div'>

                                    <h3>Defense</h3>
                                    <ProgressBar bgcolor="orange" progress={pokemon.stats?.[2].base_stat} height={30} />

                                </div>

                                <div className='graph_div'>

                                    <h3>Speed</h3>
                                    <ProgressBar bgcolor="orange" progress={pokemon.stats?.[5].base_stat} height={30} />

                                </div>

                            </div>


                        </div>






                    </div>

                    <div className='div_title_movements'>

                        <h1>Movements</h1>

                    </div>

                    <div className='card_movements_container'>


                        <div className='card_movements' >




                            <div className='generator_movents'>

                                {
                                    pokemon.moves?.map(move => (
                                        <div key={move.move.name} className='button_move'>
                                            {move.move.name}
                                        </div>
                                    ))
                                }

                            </div>


                        </div>

                    </div>


                </div>


            </section>


            <footer>
                <div className='footer_logo'>

                    <img src={image} alt="" />

                </div>
            </footer>




        </>
    );
};

export default PokemonDetail;