import styles from './not-found.module.scss';
import themeStyles from '../../styles/theme.module.scss';
import classNames from 'classnames';

import { ReactSVG } from 'react-svg';
import notFound from '../../assets/not-found/not_found.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [themeStyles.container]: true,
      })}
    >
      <div className={styles.back}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {'< Voltar'}
        </button>
      </div>
      <ReactSVG src={notFound} />
    </div>
  );
}
