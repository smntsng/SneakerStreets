import './categoryCard.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const CategoryCard = (props) => {
  return(
      <>
      <Card className="bg-dark text-white">
      <Card.Img src= {props.img} className= "card-image" />
      <Card.ImgOverlay>
        
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.ImgOverlay>
    </Card>
   






      {/* <div className= "card-container">
        <div className= "card-body">
          <img src= {props.img} className= "card-image"/>
          <p className= "cardDescription"> {props.description}</p>
          <button className= "card-btn">Shop {props.category}</button>
         
        </div>
        
      </div> */}
          
          
      </>
  )
}

export default CategoryCard;