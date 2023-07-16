import { deleteIcon, thumbnail1 } from '../../assets';
import { useCartContext } from '../../hooks';
import { Button } from '../button/Button';
import styles from './Cart.module.css';

export const Cart = () => {
  const { items, removeItem } = useCartContext();

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <span className={styles.title}>Cart</span>
      </section>
      <section className={styles.content}>
        {items.length !== 0 ? (
          <>
            {items.map((cartItem) => (
              <section className={styles.item__container} key={cartItem.id}>
                <img
                  src={thumbnail1}
                  alt="thumbnail1"
                  className={styles.thumbnail}
                />
                <section className={styles.item__info}>
                  <p className={styles['item__info--title']}>
                    {cartItem.title}
                  </p>
                  <section className={styles['item__info--desc']}>
                    <p
                      className={styles.quantity}
                    >{`$${cartItem.price} x ${cartItem.quantity}`}</p>
                    <p className={styles.total}>${cartItem.total}</p>
                  </section>
                </section>
                <img
                  src={deleteIcon}
                  alt="deleteIcon"
                  className={styles.delete}
                  onClick={() => removeItem(cartItem)}
                />
              </section>
            ))}
            <Button>Checkout</Button>
          </>
        ) : (
          <span className={styles.empty}>Your cart is empty.</span>
        )}
      </section>
    </section>
  );
};
