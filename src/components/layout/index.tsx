import styles from './layout.module.scss';
import themeStyles from '../../styles/theme.module.scss';

import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={themeStyles.container}>
        <Outlet />
      </div>
    </>
  );
}
