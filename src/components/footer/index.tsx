import styles from './footer.module.scss';
import logo from '../../assets/logo.svg';
import { ReactSVG } from 'react-svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ReactSVG src={logo} />
    </footer>
  );
}
