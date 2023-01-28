import menu from '../../data/menu.json';
import styles from './home.module.scss';

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendation}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>Ver Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
