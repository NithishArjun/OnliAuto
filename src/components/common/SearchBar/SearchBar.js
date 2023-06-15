import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="Search for cars & bikes" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
