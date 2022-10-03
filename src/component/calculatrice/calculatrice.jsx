import { useState } from "react"

const Calculatrice = () => {

    // State
    const [nb1, setNb1] = useState("")
    const [operator, setOperator] = useState("+")
    const [nb2, setNb2] = useState("")
    const [result, setResult] = useState("")

    const handleCalcul = (e) => {
        console.log(e)
        e.preventDefault()

        switch(operator) {
            case "+":
                setResult(parseInt(nb1) + parseInt(nb2))
                break;
            case "-":
                setResult(nb1 - nb2)
                break;
            case "/":
                setResult(nb1 / nb2)
                break
            case "*":
                setResult(nb1 * nb2)
                break
        }
    }

    return (
        <form onSubmit={handleCalcul}>

            <label>Nb1 : </label>
            <input type="text" value={nb1} onChange={e => setNb1(e.target.value)}/>
            <select value={operator} onChange={e => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <label>Nb 2 : </label>
            <input type="text" value={nb2} onChange={e => setNb2(e.target.value)}/>
            <input type="submit" value="="/>
            <input type="text" value={result} readOnly></input>

        </form>
    )
}

export default Calculatrice