import styles from './ordinator.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordinator: OrderOptions;
  setOrdinator: React.Dispatch<React.SetStateAction<OrderOptions>>;
}

export type OrderOptions = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export default function Ordinator({ ordinator, setOrdinator }: Props) {
  const [open, setOpen] = useState(false);
  const ordinatorName = ordinator && options.find((option) => option.value === ordinator)?.name;

  return (
    <button
      className={classNames({
        [styles.ordinator]: true,
        [styles['ordinator--active']]: ordinator !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ordinatorName || 'Ordenar Por'}</span>
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div
        className={classNames({
          [styles.ordinator__options]: true,
          [styles['ordinator__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div className={styles.ordinator__option} key={option.value} onClick={() => setOrdinator(option.value as OrderOptions)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
