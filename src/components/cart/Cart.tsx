import { deleteIcon, thumbnail1 } from '../../assets';
import { Button } from '../button/Button';
import styles from './Cart.module.css';

export const Cart = () => {
  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <span className={styles.title}>Cart</span>
      </section>
      <section className={styles.content}>
        <section className={styles.item__container}>
          <img src={thumbnail1} alt="thumbnail1"  className={styles.thumbnail}/>
          <section className={styles.item__info}>
            <p className={styles['item__info--title']}>Fall Limited Edition Sneakers</p>
            <section className={styles['item__info--desc']}>
              <p className={styles.quantity}>$125 x 3</p>
              <p className={styles.total}>$375.00</p>
            </section>
          </section>
          <img src={deleteIcon} alt="deleteIcon" className={styles.delete} />
        </section>
        <Button>Checkout</Button>
      </section>
    </section>
  );
};
