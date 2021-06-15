import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
