const CategoryCard = (props) => {
  return(
      <>
      <div className= "card">
        <div className= "card-body">
          <img src= {props.img} />
          <button className= "title">Shop {props.category}</button>
         
        </div>
        
      </div>
          
          
      </>
  )
}

export default CategoryCard;