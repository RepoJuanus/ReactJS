import React from 'react'
import { Button } from '../Button/Button'

const Counter = ({ count, sumar, restar }) => {
    return (
        <div>
            <p>Valor: {count}</p>
            <Button text="Sumar" cb={sumar}/>
            {/* <button onClick={() => sumar() }>Sumar</button> */}
            <Button text="Restar" cb={restar} color={"red"}/>
            {/* <button onClick={() => restar()}>Restar</button> */}
        </div>
    ) 
}

export default Counter
