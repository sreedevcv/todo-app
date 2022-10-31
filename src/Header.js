import "./Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div id="headerDiv">
        <h1 id="appName">TODO APP</h1>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
