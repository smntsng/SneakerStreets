import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo3-blackFont.png';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import './Nav.css';
import Checkout from '../../pages/Checkout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { getBasketItemCount } from '../../redux/selectors/Selector';


const Navigation = () => {
    const basketItemCount = useSelector(getBasketItemCount);

    return (
        <header className="header">
            <Navbar expand="lg" className="">
            <Container className='d-flex align-items-center justify-content-center text-center navContainer'>
                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            width="200"
                            height="auto"
                            className="d-inline-block align-top logo"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle  className="burgermenu"
                    aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto justify-content-center navItems">
                            <NavLink to="/" end className="nav-link" > Home </NavLink>
                            <NavLink to="/popular" end className="nav-link" > Popular </NavLink>
                            <NavLink to="/products" end className="nav-link" > Products </NavLink>
                            <NavLink to="/contactus" end className="nav-link" > Contact us </NavLink>
                            <NavLink to="/blog" end className="nav-link" > Blog </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="header-nav-icons">
                    <NavLink to="/login" className="nav-link icon">
                            <FaUser />
                        </NavLink>

                        <NavLink to="/checkout" className="nav-link icon">
                            <FaShoppingCart style={{display:'inline'}}/><p className='basketItems'> { basketItemCount}</p>
                        </NavLink>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
