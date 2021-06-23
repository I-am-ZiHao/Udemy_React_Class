import classes from './MainNavigation.module.css';
import { NavLink, Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/quotes' className={classes.logo}>
        Great Quote
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>All quote</NavLink>
          </li>
          <li>
            <NavLink to='/new-quotes' activeClassName={classes.active}>Add a quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;