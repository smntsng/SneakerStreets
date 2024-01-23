import '../assets/css/style.css';
import Hero from '../components/Hero/Hero';
//import dynamic data
import sneakers from '../assets/json/sneakers'
import ProductCard from '../components/ProductCard/ProductCard';
const Home = () => {
    return(
        <>
            <div style={{width: '80%', margin:'0 auto', maxWidth:'1400px'}}>
                <Hero />
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container" style={{margin:'0px', minWidth:'100%'}}>
                    <div className="row" style={{margin: '0px'}}>
                        {sneakers.map( sneaker => {
                            return (
                                <>
                                {/* {Product cards ho here} */}
                                <ProductCard data={sneaker}/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;