import '../assets/css/style.css';
import Hero from '../components/Hero/Hero';
//import dynamic data
import sneakers from '../assets/json/sneakers'
import ProductCard from '../components/ProductCard/ProductCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect } from "react";
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
            <div style={{ width: '80%', margin: '0 auto', maxWidth: '1400px' }}>
                <Hero />
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container" style={{ margin: '0px', minWidth: '100%' }}>
                    <div className="row" style={{ margin: '0px' }}>
                        {sneakers.map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}
                        <div className="container" style={{margin:'0px', minWidth:'100%'}}>
                            <div className="row" style={{margin: '0px'}}>
                                {sneakers.map( (sneaker, index) => <ProductCard key={index} data={sneaker}/> )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;