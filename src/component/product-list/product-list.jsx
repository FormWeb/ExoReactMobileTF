import ProductListItem from "./product-list-item"

const ProductList = (props) => {

    // Props
    const { products } = props // -> [{...}, {...}, {...}]

    const productsJSX = products.map( // -> [<p>Pomme</p>, <p>Banane</p>, ...]
        elem => <ProductListItem name={elem.name} price={elem.price} promo={elem.promo}></ProductListItem>
    )

    return (
        <>
            {productsJSX}
        </>
    )
}

export default ProductList