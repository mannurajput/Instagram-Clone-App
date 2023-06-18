import React, { memo } from 'react';
import styles from './UserImage.scss';
import user from '../../../../assets/images/user.jpg';

function UserImage(props) {
  return (
    <div className={styles.userDP}>
      <img src={user} />
    </div>
  );
}

export default memo(UserImage);
