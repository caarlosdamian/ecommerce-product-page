import styles from './Header.module.css';
import { avatar, cart, hamburger, logo } from '../../assets';
import { categoriesInfo } from '../../utils/headerUtils';

export const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__left}>
        <img src={hamburger} alt="hamburger-menu" className={styles.menu} />
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.categories}>
          {categoriesInfo.map((category) => (
            <li key={category.id} className={styles.category}>
              {category.label}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container__right}>
        <div className={styles.cart}>
          <div className={styles.cart__badge}>3</div>
          <img src={cart} alt="logo" className={styles.cart__img} />
        </div>
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
    </section>
  );
};
