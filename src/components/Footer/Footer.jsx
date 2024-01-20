import react from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



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
                        <li>New York, NY 2024, US</li>
                        <li>sneakerstreets@gmail.com</li>
                        <li>+01 453 069 00</li>
                    </ul>
                </div>
                <div className= "footer-section-socials">
                    <section>
                        <div className= "container-signup">
                            <h3 className= "signup-title">SIGN UP FOR THE SNEAKER STREETS NEWSLETTER</h3>
                            <form className= "signup-form">
                                <input className= "input" placeholder="Your email address" type= "email" required/>
                                <button type= "submit" className= "button"> Sign Up</button>
                            </form>
                        </div>
                    </section>
                <div className= "socials">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faInstagram} />

                </div>
                    {/* <h3>Follow Us</h3>
                    <ul className= "socials">
                        <li>Meta</li>
                        <li>Twitter</li>
                        <li>TikTok</li>
                        <li>Instagram</li>
                    </ul> */}
                </div>
            </div>
            <div className= "row">
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

