import Link from 'next/link';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.headerContainer}>
      <header>
        <Link href='/'>Next Meetups</Link>
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
