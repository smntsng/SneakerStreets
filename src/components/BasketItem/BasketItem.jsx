import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sneakers from '../../assets/json/sneakers';
import { useState } from 'react';

const BasketItem = (props) => {
    const [amount, setAmount] = useState(1);
    let product = sneakers.filter( (data) => {
        return data.id == props.item;
    })

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product[0].image[0]} />
            <Card.Body>
                <Card.Title> {product[0].title} </Card.Title>
                <Card.Text>
                    <p>Price: £{product[0].price}</p>
                    <p> Size: {props.size}</p>
                    <p> Color: {props.color}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <div className="flex flex-row items-center gap-12 mt-3">
            <div className="flex flex-row items-center">
                <button
                    className="upDown bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                    onClick={() => setAmount((prev) => [prev - 1])}
                >
                    -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                    className="upDown bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                    onClick={() => setAmount((prev) => [prev + 1])}
                >
                    +
                </button>
                </div>
                <button className="blkButton bg-violet-600  text-white py-4 px-16 rounded-xl h-full">
                Add to Cart
                </button>
            </div>
            </Card.Body>
        </Card>
    );
}

export default BasketItem;