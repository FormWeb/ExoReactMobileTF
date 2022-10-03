import { useState } from "react"

const Counter = (props) => {

    // Props
    const { incrementation } = props

    // State
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(valeurActuelleDUCompteur => valeurActuelleDUCompteur + incrementation)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <h3>Valeur du compteur : {count}</h3>
            <button onClick={handleClick}>+ {incrementation}</button>
            {count !== 0 && (
                <button onClick={handleReset}>Reset</button>
            )}
        </>
    )
}

export default Counter