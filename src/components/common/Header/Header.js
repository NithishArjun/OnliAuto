import logo from '../../../logo.png';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";


function Header(){
    return (
      <div className="header">
        <img src={logo} />
        <div className="searchBox">
          <SearchBar />
        </div>
        <div className="rightSideLinks">
          <a href="#">
            <FontAwesomeIcon icon={faUserAlt} />&nbsp;&nbsp;Login | Register
          </a>
        </div>
      </div>
    );
}

export default Header;