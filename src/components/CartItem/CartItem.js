import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({id, quantity, nombre, price}) => {
    const {removeItem} = useContext(CartContext)
    const subTotal = price*quantity
    const removeProduct = () => {
        removeItem(id)
    }

    return (
        <div className="container">
            <h2>{nombre}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            <p>Subtotal : ${subTotal}</p>
            <button className="button is-danger is-light" onClick={() => removeProduct(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem