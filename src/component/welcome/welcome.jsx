import style from "./welcome.module.css"

const Welcome = (props) => {

    // Props
    const { name, age } = props

    return (
        <div className={style.border}>
            <p className={style.bold}>Bienvenue {name} sur l'application React</p>
            <p>Vous avez {age} ans</p>
        </div>
    )
}

Welcome.defaultProps = {
    age: 18
}

export default Welcome