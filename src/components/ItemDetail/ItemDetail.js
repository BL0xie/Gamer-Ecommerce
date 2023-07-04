import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, img, category, description, price, stock })=> {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ("Cantidad agregada", quantity)}/>
                        </p>
                    </section>
                </div>
                </div>
    )
}

export default ItemDetail