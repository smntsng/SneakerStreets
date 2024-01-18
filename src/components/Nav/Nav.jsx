import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <>
            <nav>
                <div className="logo">
                <img src="./assets/images/Logo1.png"></img>
                </div>
                <ul>
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
        </>
    )
}
export default Nav;