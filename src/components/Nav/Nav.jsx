import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo3-blackFont.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react"
import './nav.css'
import Checkout from '../../pages/Checkout';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation  = () => {
    const [showSearchBar, setshowSearchBar] = useState(false)
    const displaySearchBar = () => {

        setshowSearchBar(true);
    }

    return (

        
        <header className="header">
            
             <Navbar expand="lg" className="">
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="src\assets\images\logo3-blackFont.png"
              width="200"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto justify-content-center"> 
    <NavLink to="/" end className="nav-link" > Home </NavLink>
    <NavLink to="/popular" end className="nav-link" > Popular </NavLink>
    <NavLink to="/products" end className="nav-link" > Products </NavLink>
    <NavLink to="/login" end className="nav-link" > Login </NavLink>
    <NavLink to="/contactus" end className="nav-link" > Contact us </NavLink>
    <NavLink to="/blog" end className="nav-link" > Blog </NavLink>
  </Nav>
</Navbar.Collapse>
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
      </Container>
    </Navbar>
            
            {/* {/* <div className="Header-top-row">
                <p className="tab">Info</p>
                <p><NavLink to="/login" end className="nav-link tab" >Login</NavLink></p>
            </div> */}
            {/* <div className="header-bottom-row">
                <div className="logo">
                    <img src={logo} style={{ height: '40px' }}></img>
                </div>
                <nav className="navbar">

                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" end className="nav-link" > Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/popular" end className="nav-link" > Popular </NavLink>
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
            </div> */}
        </header>
    )
}
export default Navigation;





// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function BrandExample() {
//   return (
//     <>
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">Brand link</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand>Brand text</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="/img/logo.svg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="/img/logo.svg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             React Bootstrap
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default BrandExample;