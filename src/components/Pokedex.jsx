

import React, { useEffect, useState } from 'react';
import image from '../img/pokedex.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom';



const Pokedex = () => {

    const user = useSelector(state => state.user)


    const [pokemons, setPokemons] = useState([])



    const [pokemonSearch, setPokemonSearch] = useState('')

    const [pokemonTypes, setPokemonTypes] = useState([])


    const navigate = useNavigate()



    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=644')
            .then(res => setPokemons(res.data.results))


        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokemonTypes(res.data.results))

    }, [])


    console.log(pokemons)

    const [page, setPage] = useState(1)
    const lastIndex = page * 28
    const firstIndex = lastIndex - 28
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(pokemons.length / 28)



    const numbers = []

    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i)
    }





    const submit = (e) => {

        e.preventDefault()



        navigate(`${pokemonSearch}`)

    }




    const filteredPokemons = (e) => {

        e.preventDefault()

        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))

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

            <section>


                <div className='welcome_div'>
                    <h3>Welcome {user}</h3>
                    <p>¡Here you can find your favorite pokemon!</p>

                </div>

                <div className='buttoms_forms'>

                    <div className='input_div'>


                        <form onSubmit={submit}>

                            <input type="text"
                                placeholder='search a pokemon...'
                                value={pokemonSearch}
                                onChange={e => setPokemonSearch(e.target.value)}
                            />
                            <button>¡Go!</button>

                        </form>



                    </div>


                    <div className='select_opt_div'>

                        <select onChange={filteredPokemons}>
                            <option value="">Selecciona un tipo de pokemon</option>
                            {
                                pokemonTypes.map(type => (
                                    <option value={type.url} key={type.url}>
                                        {type.name}
                                    </option>
                                ))
                            }
                        </select>

                    </div>



                </div>



            </section>

            <section>

                <div className='cards_container'>



                    {
                        pokemonsPaginated.map(pokemon => (
                            <PokemonItem
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.name ? pokemon.name : pokemon.name}
                            />
                        ))
                    }



                </div>


            </section>



            <footer>



                <div className='paginated_container'>


                    <button onClick={() => setPage(page - 1)} disabled={page === 1} className='buttonNextPrev'>Prev Page</button>

                    {
                        numbers.map(number => (
                            <button className='button_page' onClick={() => setPage(number)} key={number}>{number}</button>
                        ))
                    }

                    <button onClick={() => setPage(page + 1)} disabled={page === lastPage} className='buttonNextPrev'>Next Page</button>

                </div>

                <div className='footer_logo'>

                    <img src={image} alt="" />

                </div>

            </footer>

        </>
    );
};

export default Pokedex;