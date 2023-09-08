import React, { useState } from 'react'
import Counter from './Counter'

const CounterContainer = () => {
    // Utilizando el hook useState para gestionar el estado local del contador
    const [count, setCount] = useState(0) // Inicializa el contador con un valor inicial de 0

    // Función para aumentar el contador en 1
    const sumar = () => {
        setCount(count + 1) // Actualiza el valor del contador usando setCount
    }

    // Función para disminuir el contador en 1, con la restricción de que el contador nunca sea menor que 0
    const restar = () => {
        if (count === 0) return // Evita que el contador sea menor que 0
        setCount(count - 1) // Actualiza el valor del contador usando setCount
    }

    // Renderiza el componente Counter y pasa el valor de l contador y las funciones para aumentar y disminuir como props
    return (
        <Counter count={count} sumar={sumar} restar={restar} />
    )
}

export default CounterContainer
