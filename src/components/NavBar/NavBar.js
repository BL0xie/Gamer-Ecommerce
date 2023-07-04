import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar is-dark container">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item title is-3">
                    FireGamers
                </Link>
            </div>
                <div className="navbar-menu"> 
                    <div className="navbar-start">
                        <NavLink to={`/category/console`} className="navbar-item">Consolas</NavLink>
                        <NavLink to={`/category/games`} className="navbar-item">Juegos</NavLink>
                        <NavLink to={`/category/accesories`} className="navbar-item">Accesorios</NavLink>
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