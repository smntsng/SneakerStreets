import sneakers from "../assets/json/sneakers"
import ProductCard from "../components/ProductCard/ProductCard";

const Popular = () => {

    // create an object of products
    var filterMap = {};
    sneakers.forEach(function (item) {
        if (!filterMap[item.id] || filterMap[item.id].popularity < item.popularity) {
            filterMap[item.id] = item;
        }
    })
    var popularProducts = [];

    //Add all the products in the array
    for (var id in filterMap) {
        popularProducts.push(filterMap[id]);
    }

    // Sort popular products 
    popularProducts.sort(function(a , b) {
        //console.log(a.popularity)
        return b.popularity - a.popularity;
    });

    console.log(popularProducts)


    return(
        <>
            <div style={{ width: '80%', margin: '50px auto'}}>
                <h3 style={{textAlign:'left', marginLeft: '20px'}}>Popular Products</h3>
                <div className="container" style={{marginTop:'0px', minWidth:'100%'}}>
                    <div className="row" style={{margin: '0px'}}>
                        {popularProducts.map( (sneaker, index) => <ProductCard key={index} data={sneaker} popularity={true}/> )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popular;