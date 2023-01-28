import { ReactSVG } from 'react-svg';
import logo from '../../assets/logo.svg';
import styles from './nav.module.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/menu',
    },
    {
      label: 'Sobre',
      to: '/about',
    },
  ];
  return (
    <nav className={styles.nav}>
      <ReactSVG src={logo} />
      <ul className={styles.nav__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.nav__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
