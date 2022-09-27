import style from "./product-list.module.css"

const ProductListItem = (props) => {

    // Props
    const { name, price, promo } = props

    const stylePrice = promo ? style.red : ""

    return (
        <>
            <h3>{name}</h3>
            <p className={stylePrice}>Prix : {price}</p>
            {
                promo ? (
                    <p>Promo</p>
                ) : (
                    <p>Pas en promo</p>
                )
            }
        </>
    )
}

export default ProductListItem