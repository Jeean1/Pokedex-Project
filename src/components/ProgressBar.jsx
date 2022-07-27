

import React from 'react';

const ProgressBar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: '75%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 10
    }

    const Childdiv = {
        height: '100%',
        maxWidth: `${progress/1.5}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }



    return (

        <>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{`${progress} / 150`}</span>
                </div>
            </div>
        </>


    );
};

export default ProgressBar;