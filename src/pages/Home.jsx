import '../assets/css/style.css';
import Hero from '../components/Hero/Hero';
//import dynamic data
import sneakers from '../assets/json/sneakers'
import ProductCard from '../components/ProductCard/ProductCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from "react";
import CategoryCard from '../components/CategoryCard/CategoryCard';
const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="discountModal">
                    <h4>Exclusive Offer</h4>
                    <p>
                        Welcome to SneakerStreet.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    useEffect(() => {
        const fetchModal = async () => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          setModalShow(true);
        };
    
        fetchModal();
      }, []);

    return (
        <>
            <div style={{ width: '80%', margin: '0 auto', maxWidth: '1400px' }}>
                <Hero />
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container" style={{margin:'0px', minWidth:'100%'}}>
                    <div className="row" style={{margin: '0px'}}>
                        {sneakers.map( (sneaker, index) => <ProductCard key={index} data={sneaker}/> )}
                    </div>
                </div>
                <div>
                    {/* row and 3 columns inside the row - one component with image and tags */}
                    <CategoryCard category="men"/>
                    <CategoryCard category="women"/>
                    <CategoryCard category="kids"/>
                    

                </div>
            </div>
            
        </>
    )
}

export default Home;