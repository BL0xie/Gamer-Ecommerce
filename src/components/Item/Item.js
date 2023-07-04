import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombre ,img, price, stock}) => {
    return (
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
                            <span>Precio: ${price}</span>
                        </p>
                        <p className="card-footer-item">
                            <span>Stock disponible: {stock}</span>
                        </p>
                        <p className="card-footer-item">
                            <Link to={`/item/${id}`} className="button is-warning">Ver detalle</Link>
                        </p>
                    </section>
                </div>
    )
}

export default Item