import "./Header.css";
import Nav from "./Nav";

const Header = ({ setSearchKeyword, currPage }) => {
  return (
    <header>
      <div id="headerDiv">
        <h1 id="appName">TODO APP</h1>
      </div>
      <Nav setSearchKeyword={setSearchKeyword} currPage={currPage} />
    </header>
  );
};

export default Header;
