import '../assets/css/style.css';
import ProductCard from '../components/ProductCard/ProductCard';
const Home = () => {
    return(
        <>
            <h2>Home</h2>
            <div style={{width: '80%', height:'800px', margin:'0 auto'}}>
                <h4 className='containerHeading'>New Arrivals</h4>
                <div className="container">
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;