import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo3-blackFont.png';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import './nav.css';
import Checkout from '../../pages/Checkout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    const [showSearchBar, setshowSearchBar] = useState(false);
    const displaySearchBar = () => {
        setshowSearchBar(true);
    };

    return (
        <header className="header">
            <Navbar expand="lg" className="">
            <Container className='d-flex align-items-center justify-content-center text-center navContainer'>
                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            width="200"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="burgermenu" id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-center navItems">
                            <NavLink to="/" end className="nav-link" > Home </NavLink>
                            <NavLink to="/popular" end className="nav-link" > Popular </NavLink>
                            <NavLink to="/products" end className="nav-link" > Products </NavLink>
                            <NavLink to="/login" end className="nav-link" > Login </NavLink>
                            <NavLink to="/contactus" end className="nav-link" > Contact us </NavLink>
                            <NavLink to="/blog" end className="nav-link" > Blog </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="header-nav-icons">
                    <NavLink to="/login" className="nav-link">
                            <FaUser />
                        </NavLink>

                        <NavLink to="/Checkout" className="nav-link">
                            <FaShoppingCart />
                        </NavLink>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
