import React, { memo, Fragment } from 'react';
import UserImage from './components/UserImage/UserImage';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import styles from './Profile.scss';

function Profile(props) {
  return (
    <Fragment>
      <div className={styles.profile}>
        <UserImage />
        <UserDetails />
      </div>
      <Posts />
    </Fragment>
  );
}

export default memo(Profile);
