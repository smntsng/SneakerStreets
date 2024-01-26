
import './search.css'; 

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <input type="text"
      className="search-bar"
      placeholder="Search for products..."
      value={props.searchText}
      onChange={props.handleSearchChange}/>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;