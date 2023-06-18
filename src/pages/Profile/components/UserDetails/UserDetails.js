import React, { memo } from 'react';
import styles from './UserDetails.scss';

function UserDetails(props) {
  return (
    <div className={styles.userDetails}>
      <div className={styles.username}>through_my_lens</div>

      <ul>
        <li>
          <strong>40</strong> posts
        </li>
        <li>
          <strong>283</strong> followers
        </li>
        <li>
          <strong>274</strong> following
        </li>
      </ul>
      <div className={styles.name}> Shriphad Rao</div>
      <div className={styles.bio}> The world through my lens.</div>
    </div>
  );
}

export default memo(UserDetails);
