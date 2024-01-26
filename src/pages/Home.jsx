import '../assets/css/style.css';
import Hero from '../components/Hero/Hero';
//import dynamic data
import sneakers from '../assets/json/sneakers'
import ProductCard from '../components/ProductCard/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { useState, useEffect } from 'react';
import ModalDiscount from '../components/ModalDiscount/ModalDiscount';


const Home = () => {
    //Discount Modal
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        const fetchModal = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3500));
            setModalShow(true)
        };
        fetchModal();
    }, []);

    return (
        <>
            <div style={{ width: '90%', margin: '50px auto', maxWidth: '1300px' }}>
                <Hero />
                <ModalDiscount
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container" style={{ margin: '0px', minWidth: '100%' }}>
                    <div className="row" >
                        {sneakers.slice(0, 5).map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}
                    </div>
                </div>
                <div>
                    <h3 style={{marginTop: '30px'}} className= "categories-header">CATEGORIES</h3>
                </div>
                <div className= "wrapper">
                    <CategoryCard category="Men" img= "src/assets/images/mensAd3.png" description= "Find the latest trends for Men here!"/>
                    <CategoryCard category="Women" img= "src/assets/images/womensAd3.png" description= "Find the latest trends for Women here!"/>
                    <CategoryCard category="Kids" img= "src/assets/images/kidsAd3.png" description= "Find the latest trends for Kids here!"/>
                </div>
                
                <h4 className='containerHeading mt-5'>Classics</h4>
                <div className="container" style={{ margin: '0px', minWidth: '100%' }}>
                    <div className="row" >
                        {sneakers.slice(0, 5).map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}                   
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;