import { useState } from 'react';

import PropsTypes from 'prop-types'

import React from 'react'

export const CounterApp = ({ value}) => {

    const [ counter, setCounter ] = useState( value )

    function handAdd(){
        // console.log(event);
        setCounter(counter + 1)
    }

    return (
            <>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
                <button id='button' onClick={ handAdd }>
                    +1
                </button>
            </>
         )
}

CounterApp.propsTypes = {
    value: PropsTypes.number.isRequired
}