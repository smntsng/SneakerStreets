import react from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return(
        <div className= "main-footer">
            <div className= "container">
                <div className= "footer-section-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Orders</li>
                        <li>Shipping Info</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className= "footer-section-contact">
                    <h3>Get in touch</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faHouse} /> {""}New York, NY 2024, US</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> {""}sneakerstreets@gmail.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> {""}+01 453 069 00</li>
                    </ul>
                </div>
                <div className= "footer-section-socials">
                    <section>
                        <div className= "container-signup">
                            <h3 className= "signup-title">SIGN UP FOR THE SNEAKER STREETS NEWSLETTER</h3>
                            <form className= "signup-form">
                                <input className= "input" placeholder="Your email address" type= "email" required/>
                                <button type= "submit" className= "button"> Subscribe</button>
                            </form>
                        </div>
                    </section>
                <div className= "socials">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faInstagram} />

                </div>
                    
                </div>
            </div>
            <div className= "row" style={{width: '40%', margin: '0px auto'}}>
                <div className= "copyright-section">
                    <p className= "col-sm">
                        Copyright &copy; SneakerStreets
                    </p>
                </div>
            </div>
        </div>
        
        

    )
}

export default Footer;