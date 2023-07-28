import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="container">
                <h1>No hay items en el carrito</h1>
                <Link to= '/' className = "button is-info is-primary">Productos</Link>
            </div>
        )
    }

    return (
        <div className="container">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className = "button is-warning is-medium">Limpiar carrito</button>
            <Link to='/checkout' className = "button is-danger is-medium">Checkout</Link>
        </div>
    )
}

export default Cart