import { useState } from 'react';

import PropsTypes from 'prop-types'

import React from 'react'

export const CounterApp = ({ value}) => {

    const [ counter, setCounter ] = useState( value )

    const handAdd = () => {
        // console.log(event);
        setCounter(counter + 1)
    }
    
    const handlerRem = () => setCounter(counter - 1)
        
    const reset = () => setCounter(value)
    

    return (
            <>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
                <button id='button' onClick={ handAdd }>
                    +1
                </button>
                <button onClick={ handlerRem }>
                    -1 
                </button>
                <button onClick={ reset }>
                    Reset
                </button>

            </>
         )
}

CounterApp.propsTypes = {
    value: PropsTypes.number.isRequired
}