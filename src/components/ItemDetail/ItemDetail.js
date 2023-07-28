import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, nombre, img, category, description, price, stock })=> {
    const[quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, price
        }

        addItem (item, quantity)
    }

    return (
        <div className="container">
        <div className="card">
                    <header className="card-header">
                        <div className="card-header-title is-centered">
                            {nombre}
                        </div>
                    </header>
                    <picture className="card-image">
                        <figure className="image is-4by3">
                        <img src={img} alt={nombre}></img>
                        </figure>
                    </picture>
                    <section className="card-footer">
                        <p className="card-footer-item">
                            <span>Categoria: {category}</span>
                        </p>
                        <p className="card-footer-item">
                            <span>Descripcion: {description}</span>
                        </p>
                        <p className="card-footer-item">
                            <span>Precio: ${price}</span>
                        </p>
                        <p className="card-footer-item">
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart' className="button is-danger is-medium">Terminar compra</Link>
                                ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                )
                            }
                        </p>
                    </section>
                </div>
                </div>
    )
}

export default ItemDetail