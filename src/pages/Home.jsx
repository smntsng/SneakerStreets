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
                        {sneakers.map((sneaker, index) => <ProductCard key={index} data={sneaker} />)}
                    </div>
                </div>
                <div>
                    <h3 style={{marginTop: '30px'}} className= "categories-header">CATEGORIES</h3>
                </div>
                <div className= "wrapper">
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