import carro from "./assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cart} = useContext(CartContext)

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src={carro} alt="cart-widget"/>
            <span>{totalQuantity}</span>
        </Link>
    )
}


export default CartWidget