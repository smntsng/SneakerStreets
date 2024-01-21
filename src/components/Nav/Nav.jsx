import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo1.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './nav.css'
const Nav = () => {
    return (
        <header className="header">
            <div className="Header-top-row">
                <p>Info</p>
                <p>Login</p>
            </div>
            <div className="header-bottom-row">
                <div className="logo">
                    <img src={logo} style={{ height: '200px' }}></img>
                </div>
                <nav className="navbar">

                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" end className="nav-link" > Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trending" end className="nav-link" >Trending</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" end className="nav-link" > Products </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" end className="nav-link" > Login </NavLink>
                        </li>
                        <li>
                            <a href="_blank">Contact</a>
                        </li>
                    </ul>

                </nav>
                <div className="header-nav-icons">
                     <FaSearch /> 
                     <FaShoppingCart />
                </div>
            </div>

        </header>
    )
}
export default Nav;