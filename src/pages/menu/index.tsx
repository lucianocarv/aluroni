import styles from './menu.module.scss';
import themeStyles from '../../styles/theme.module.scss';

import Search from './search';
import { useState } from 'react';
import Filter from './filters';
import Ordinator, { OrderOptions } from './ordinator';
import Items from './items';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordinator, setOrdinator] = useState<OrderOptions>('');

  return (
    <section className={styles.menu}>
      <h3 className={themeStyles.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filter filter={filter} setFilter={setFilter} />
        <Ordinator ordinator={ordinator} setOrdinator={setOrdinator} />
      </div>
      <Items search={search} filter={filter} ordinator={ordinator} />
    </section>
  );
}
