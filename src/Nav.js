import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from './plus-circle.svg';
import { ReactComponent as HomeIcon } from './house.svg';
import "./Nav.css";

const Nav = ({ setSearchKeyword, currPage }) => {
  return (
    <nav id="nav-container">
      <div id="button-container">
        {currPage === "New" && (
            <div id="homeSpan" className="nav-div">
              <Link to="/"><HomeIcon /></Link>{" "}
              {/* <Link to="/">Home</Link>{" "} */}
          </div>
        )}

        {currPage === "Home" && (
            <div id="newSpan" className="nav-div">
              <Link to="/New"><AddIcon /></Link>
              {/* <Link to="/New">New</Link> */}
            </div>
        )}
      </div>

      {currPage === "Home" ? (
        <input
          type={"text"}
          id="searchBar"
          placeholder="Search"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
