// Styling
import { StyledLink, NavProduct,ThemeButton,Logo,Nav } from "../styles";

import darkLogo from "./dark-logo.png";
import lightLogo from "./light-logo.png";


const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <Nav className="navbar navbar-expand">
      <StyledLink className="navbar-brand" exact to="/">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      </StyledLink>
      <div className="navbar-nav ml-auto">

      <NavProduct exact to="/"> Home </NavProduct>
      <NavProduct to="/products"> ProductList</NavProduct>

        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </Nav>
  );
};

export default NavBar;
