import React, { memo } from 'react';
import { info } from '../../constant';
import styles from './Posts.scss';

function Posts(props) {
  return (
    <div className={styles.posts}>
      {info.map((post, index) => (
        <div className={styles.post} key={index}>
          <img src={post.src} />
        </div>
      ))}
    </div>
  );
}

export default memo(Posts);
