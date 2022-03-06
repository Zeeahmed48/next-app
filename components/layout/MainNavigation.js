import Link from 'next/Link';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.headerContainer}>
      <header>
        <h1>Next Meetups</h1>
        <nav>
          <ul>
            <li>
              <Link href='/'>All Meetups</Link>
            </li>
            <li>
              <Link href='/new-meetup'>Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
