

import React, { useState } from 'react';
import image from '../img/pokedex.png'
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName } from '../store/user.slice';
import { useNavigate } from 'react-router-dom';


const InputUserPokemon = () => {


    const [userNameInput, setUserNameInput] = useState('')


    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submit = (e) => {

        e.preventDefault()

        dispatch(changeUserName(userNameInput))


        navigate('/pokedex')

    }

    

    return (

        <>

            <section className='Section_User_Input'>

                <div className='pokedex_div'>

                    <img src={image} alt="" style={{ width: '100%' }} />

                </div>

                <div className='info_trainer'>

                    <div className='info_input'>
                        <h1>¡Hello trainer!</h1>


                        <p>Give me your name to start</p>

                        <form onSubmit={submit}>
                            <input type="text"
                                placeholder='Type your name...'
                                value={userNameInput}
                                onChange={e => setUserNameInput(e.target.value)}
                             />
                            <button>¡Go!</button>
                        </form>

                    </div>

                    <div className='trainer_div'>

                        <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" style={{ width: '50%' }} />

                    </div>
                </div>

            </section>

            <footer>
                <div className='color1'>

                    <div className='color2'>.</div>

                    <div className='circle1'></div>

                    <div className='circle2'></div>

                </div>
            </footer>

        </>
    );
};

export default InputUserPokemon;