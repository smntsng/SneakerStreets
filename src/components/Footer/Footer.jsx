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
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div className= "main-footer">
            <div className= "container" style={{ width: '100%', margin: '0 auto', maxWidth: '1600px' }}>
                <div className= "footer-section-menu text-start ">
                    <h3 className='quickNav'><strong>Quick Nav</strong></h3>
                    <ul>
                        
                        <li><Link to= "/Products">Products</Link></li>
                        <li><Link to= "/Popular">Popular</Link></li>
                        <li><Link to= "/Blog">Blog</Link></li>
                        <li><Link to= "/ContactUs">Contact Us</Link></li>                       
                    </ul>
                </div>
                <div className= "footer-section-contact text-start">
                    <h3 className=' quickNav text-start'><strong>Get in Touch</strong></h3>
                    <ul>
                        <li ><a href="https://www.google.com/maps/place/2024+US-1,+Rahway,+NJ+07065,+USA/@40.6075688,-74.2640265,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3b3770cf143eb:0xdbad815d75b3bda1!8m2!3d40.6075648!4d-74.2614516!16s%2Fg%2F11bw4hmsy2?entry=ttu" target="blank"><FontAwesomeIcon icon={faHouse} /> {""} New York, NY 2024, US</a></li>
                        <li><a href="mailto: hello@sneakerstreets.com"><FontAwesomeIcon icon={faEnvelope} /> {""} hello@sneakerstreets.com</a></li>
                        <li><a href="tel:+ 01 453 069 00"><FontAwesomeIcon icon={faPhone} /> {""}+ 01 453 069 00</a> </li>
                    </ul>
                </div>
                <div className= "footer-section-socials">
                    <section>
                        <div className= "container-signup">
                            <h3 className= "signup-title">SIGN UP FOR THE SNEAKER STREETS NEWSLETTER</h3>
                            <form className= "signup-form ">
                                <input className= "input" placeholder="Your email address" type= "email" required/>
                                <button type= "submit" className= "footer-button">Subscribe</button>
                            </form>
                        </div>
                    </section>
                <div className= "socials">
                    <a href="https://www.facebook.com/" target='blank'><div className='socialIcon'> <FontAwesomeIcon icon={faFacebook} /></div></a>
                    <a href="https://twitter.com/" target='blank'><div className='socialIcon'> <FontAwesomeIcon icon={faTwitter}  /></div></a> 
                    <a href="https://www.tiktok.com/" target='blank'><div className='socialIcon'> <FontAwesomeIcon icon={faTiktok} /></div></a>
                    <a href="https://www.instagram.com/" target='blank'><div className='socialIcon'> <FontAwesomeIcon icon={faInstagram} /></div></a>
                </div>
            </div>
            </div>
            <div className= "row" style={{width: '40%', margin: '0px auto'}}>
                <div className= "copyright-section">
                    <p className= "col-sm mb-3 mt-3">
                        Copyright &copy; SneakerStreets
                    </p>
                </div>
            </div>
        </div>
        
        

    )
}

export default Footer;