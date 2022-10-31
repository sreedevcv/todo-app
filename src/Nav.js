import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "./plus-circle.svg";
import { ReactComponent as HomeIcon } from "./house.svg";
import "./Nav.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { setSearchKeyword, currPage } = useContext(DataContext);

  return (
    <nav id="nav-container">
      <div id="button-container">
        {(currPage === "New" || currPage === "Edit") && (
          <div id="homeSpan" className="nav-div">
            <Link to="/">
              <HomeIcon />
            </Link>{" "}
          </div>
        )}

        {currPage === "Home" && (
          <div id="newSpan" className="nav-div">
            <Link to="/New">
              <AddIcon />
            </Link>
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
