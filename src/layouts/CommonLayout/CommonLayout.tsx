import { Outlet } from 'react-router';
import * as styles from './CommonLayout.css';

const CommmonLayout = () => {
  return (
    <div className={`${styles.container}`}>
      <Outlet />
    </div>
  );
};

export default CommmonLayout;
