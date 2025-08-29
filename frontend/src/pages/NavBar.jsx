import { NavLink } from 'react-router'; // 
import logo from "../assets/5bblogo.jpg"; // adjust path based on your file

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="myName">
        <img src={logo} id="logo" alt="Logo" />
      </NavLink>
      <ul>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;