import '../assets/css/style.css';
import Hero from '../components/Hero/Hero';
//import dynamic data
import sneakers from '../assets/json/sneakers'
import ProductCard from '../components/ProductCard/ProductCard';
// import Modal from 'react-bootstrap/Modal';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect } from "react";
import CategoryCard from '../components/CategoryCard/CategoryCard';


const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="modal-header">
                    <div className="close-button">
                        <Button onClick={props.onHide} className="close-button">
                            <FaTimes size={10} />
                        </Button>
                    </div>
                </div>
                <Modal.Body>
                    <img src="src\assets\images\PromoModal.png"></img>
                </Modal.Body>
            </Modal>
        );

    }
    useEffect(() => {
        const fetchModal = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3500));
            setModalShow(true);
        };


        fetchModal();
    }, []);

    
    return (
        <>
            <div style={{ width: '90%', margin: '0 auto', maxWidth: '1300px' }}>
                <Hero />
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container" style={{ margin: '0px', minWidth: '100%' }}>
                    <div className="row" >
                        {sneakers.map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}
                    </div>
                </div>
                <div>
                    <h3 style={{marginTop: '30px'}} className= "categories-header">CATEGORIES</h3>
                </div>
                <div className= "wrapper">
                    {/* row and 3 columns inside the row - one component with image and tags */}
                    <CategoryCard category="Men" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsTvA_0zzi0UNvSxAE9CSObi90WXY4cIzDQ&usqp=CAU" description= "Find the latest trends for Men here!"/>
                    <CategoryCard category="Women" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiAQL7vR2e7dx6OGjqogArFyPwyUJWezcXg&usqp=CAU" description= "Find the latest trends for Women here!"/>
                    <CategoryCard category="Kids" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxk40lziGTex3LPmjxiuiaqriUSVwffrqOA&usqp=CAU" description= "Find the latest trends for Kids here!"/>
                </div>
                
                <h4 className='containerHeading mt-5'>Classics</h4>
                <div className="container" style={{ margin: '0px', minWidth: '100%' }}>
                    <div className="row" >
                        {sneakers.map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}                   
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;