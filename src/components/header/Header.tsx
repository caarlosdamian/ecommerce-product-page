import { avatar, cart, hamburger, logo } from '../../assets';
import { categoriesInfo } from '../../utils/headerUtils';
import { useCartContext, useSidebarContext } from '../../hooks';
import { Cart } from '..';
import { useMemo } from 'react';
import styles from './Header.module.css';

export const Header = () => {
  const {
    handleSidebarToggle,
    handleCartToggle,
    state: { cart: showCart },
  } = useSidebarContext();
  const { items } = useCartContext();
  const badgeNumber = useMemo(
    () =>
      items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0),
    [items]
  );
  return (
    <section className={styles.container}>
      <div className={styles.container__left}>
        <img
          src={hamburger}
          alt="hamburger-menu"
          className={styles.menu}
          onClick={handleSidebarToggle}
        />
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
          {badgeNumber !== 0 && (
            <div className={styles.cart__badge}>{badgeNumber}</div>
          )}

          <img
            src={cart}
            alt="logo"
            className={styles.cart__img}
            onClick={handleCartToggle}
          />
        </div>
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
      {showCart && <Cart />}
    </section>
  );
};
