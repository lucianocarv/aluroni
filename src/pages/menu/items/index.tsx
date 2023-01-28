import menu from '../../../data/menu.json';
import Item from './item';
import styles from './items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  search: string;
  filter: number | null;
  ordinator: string;
}

export default function Items(props: Props) {
  const [lista, setLista] = useState(menu);
  const { search, filter, ordinator } = props;

  function searchTest(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  const sortPropertiesAscending = (list: typeof menu, property: 'size' | 'serving' | 'price') => {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  function sort(newList: typeof menu) {
    switch (ordinator) {
    case 'porcao':
      return sortPropertiesAscending(newList, 'size');
    case 'qtd_pessoas':
      return sortPropertiesAscending(newList, 'serving');
    case 'preco':
      return sortPropertiesAscending(newList, 'price');
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter((item) => searchTest(item.title) && filterTest(item.category.id));
    setLista(sort(newList));
  }, [search, filter, ordinator]);

  return (
    <div className={styles.items}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
