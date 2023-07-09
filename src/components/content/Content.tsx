import { minus, plus } from '../../assets';
import { Product } from '../../interfaces/contentInterfaces';
import { imgArray } from '../../utils/contentUtil';
import { Button } from '../button/Button';
import { Slider } from '../slider/Slider';
import styles from './Content.module.css';

export const Content = ({ product }: { product: Product }) => {
  const { actualPrice, desc, discount, id, price, title } = product;
  return (
    <section className={styles.container}>
      <Slider imgs={imgArray} />
      <section className={styles.info}>
        <h3 className={styles.info__header}>Sneaker Company</h3>
        <h4 className={styles.info__title}>{title}</h4>
        <p className={styles.info__desc}>{desc}</p>
        <section className={styles.info__price}>
          <section className={styles.price}>
            <p>${price}</p>
            <section className={styles.discount}>{discount}%</section>
          </section>
          <p className={styles.actual__price}>${actualPrice}</p>
        </section>
        <section className={styles.controls}>
          <img src={minus} alt="minus" />
          <p className={styles.controls__amount}>3</p>
          <img src={plus} alt="plus" />
        </section>
        <Button style={{boxShadow:'0px 20px 50px -20px #FF7E1B'}}>Add to cart</Button>
      </section>
    </section>
  );
};
