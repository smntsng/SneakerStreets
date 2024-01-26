import { NavLink } from 'react-router-dom';
import './categoryCard.css'
const CategoryCard = (props) => {
  return(
      <>
      <div className= "card-container">
        <div className= "card-body">
          <img src= {props.img} className= "card-image"/>
          <p className= "cardDescription"> {props.description}</p>
          
          <button className= "card-btn">
            <NavLink to="/products" end> Shop {props.category} </NavLink>
          </button>
        </div>
        
      </div>
          
          
      </>
  )
}

export default CategoryCard;