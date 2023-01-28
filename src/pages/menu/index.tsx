import styles from './menu.module.scss';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/logo.svg';
import Search from './search';
import React, { useState } from 'react';
import Filter from './filters';
import Ordinator, { OrderOptions } from './ordinator';
import Items from './items';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordinator, setOrdinator] = useState<OrderOptions>('');

  return (
    <main>
      <nav className={styles.top}>
        <ReactSVG src={logo} />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filter filter={filter} setFilter={setFilter} />
          <Ordinator ordinator={ordinator} setOrdinator={setOrdinator} />
        </div>
        <Items search={search} filter={filter} ordinator={ordinator} />
      </section>
    </main>
  );
}
