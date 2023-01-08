import React from 'react';
import { Outlet } from '@umijs/max';
import useStyles from './style';

const BasicLayout: React.FC = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>

      <Outlet />
    </div>
  );
};

export default BasicLayout;
