import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar is-dark container">
            <div className="navbar-brand">
                <div className="navbar-item title is-3">
                    FireGamers
                </div>
            </div>
                <div className="navbar-menu"> 
                    <div className="navbar-start">
                        <a className="navbar-item">Consolas</a>
                        <a className="navbar-item">Juegos</a>
                        <a className="navbar-item">Accesorios</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
                
        </nav>
    )
}

export default Navbar