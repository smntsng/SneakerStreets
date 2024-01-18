import Nav from "../Nav/Nav";
import './header.css';

import isIcon from '../../assets/images/icon.png'

const Header = () => {
    return(
        <>
            <h2>Header</h2>
            <img src={isIcon} ></img>
            <Nav />
        </>
    )
}

export default Header;