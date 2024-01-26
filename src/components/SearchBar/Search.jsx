
import './Search.css'; 

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-bar" placeholder="Search for products..." />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;