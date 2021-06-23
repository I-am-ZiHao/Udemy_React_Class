import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = prosp => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        {prosp.children}
      </main>
    </Fragment>
  );
};

export default Layout;