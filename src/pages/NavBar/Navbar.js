import React, { memo } from 'react';
import user from '../../assets/images/user.jpg';
import styles from './Navbar.scss';

function NavBar(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>Instagram</div>
        <ul>
          <li className={styles.user}>
            <img src={user} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(NavBar);
