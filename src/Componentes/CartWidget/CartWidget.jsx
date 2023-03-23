export const CartWidget = ({cantCarrito}) => {
    return(
        <>
            <button className="cart"><img src="./img/cart.png" alt="" /></button>
            <p>{cantCarrito}</p>
        </>
    )
}