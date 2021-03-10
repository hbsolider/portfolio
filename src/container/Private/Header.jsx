import { memo } from 'react';
import styles from './Style.module.scss';

export const Header = memo(() => {
  return (
    <div className={styles.privateHeader}>
      <a href="/">Baro</a>
    </div>
  );
});
export default Header
