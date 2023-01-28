import React from 'react';
import filters from './filters.json';
import styles from './filters.module.scss';
import classNames from 'classnames';

type Option = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: Props) {
  function selectFilter(option: Option) {
    if (filter === option.id) return setFilter(null);

    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => {
        return (
          <button
            className={classNames({
              [styles.filters__filter]: true,
              [styles['filters__filter--active']]: filter === option.id,
            })}
            key={option.id}
            onClick={() => selectFilter(option)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
