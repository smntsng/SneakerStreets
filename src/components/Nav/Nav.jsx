import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo3-blackFont.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react"
import './nav.css'
import Checkout from '../../pages/Checkout';

const Nav = () => {
    const [showSearchBar, setshowSearchBar] = useState(false)
    const displaySearchBar = () => {

        setshowSearchBar(true);
    }

    return (
        <header className="header " style={{ width: '88.5%', margin: '0 auto', maxWidth: '1400px' }}>
            {/* <div className="Header-top-row">
                <p className="tab">Info</p>
                <p><NavLink to="/login" end className="nav-link tab" >Login</NavLink></p>
            </div> */}
            <div className="header-bottom-row">
                <div className="logo mt-2">
                    <a href="/"><img src={logo} style={{ height: '40px' }}></img></a>
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
                        <NavLink to="/contactus" end className="nav-link" > Contact us </NavLink>
                        </li>
                        <li>
                        <NavLink to="/blog" end className="nav-link" > Blog </NavLink>
                        </li>
                    </ul>

                </nav>
                <div className="header-nav-icons">
                    {!showSearchBar ? (
                        <FaSearch onClick={displaySearchBar} />
                    ) : (
                        <div>
                            <input
                                type="text"
                                placeholder='Search for Item'
                            ></input>
                            <FaSearch />
                        </div>
                    )}
                    <NavLink to="/Checkout" className="nav-link">
                        <FaShoppingCart />
                    </NavLink>
                </div>
            </div>

        </header>
    )
}
export default Nav;