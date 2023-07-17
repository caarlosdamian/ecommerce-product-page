import { minus, plus } from '../../assets';
import { Product } from '../../interfaces/contentInterfaces';
import { imgArray } from '../../utils/contentUtil';
import { Button } from '../button/Button';
import { Slider } from '../slider/Slider';
import { useCartContext, useQuantity, useSidebarContext } from '../../hooks';
import { DesktopSlider } from '..';
import { DesktopSliderOverlay } from '../desktopSliderOverlay/DesktopSliderOverlay';
import { useSlide } from '../../hooks/useSlide';
import styles from './Content.module.css';

export const Content = ({ product }: { product: Product }) => {
  const { actualPrice, desc, discount, id, price, title } = product;
  const { handleQuantity, quantity } = useQuantity();
  const { AddItem } = useCartContext();
  const { handleImgChange, viewImg } = useSlide(imgArray);
  const {
    state: { slider: show },
  } = useSidebarContext();
  return (
    <section className={styles.container}>
      <Slider
        imgs={imgArray}
        handleImgChange={handleImgChange}
        viewImg={viewImg}
        className="hidde"
      />
      <DesktopSlider imgs={imgArray} hidde="hidde" />

      {show && <DesktopSliderOverlay />}

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
        <section className={styles.controls__wrapper}>
          <section className={styles.controls}>
            <img src={minus} alt="minus" onClick={() => handleQuantity()} />
            <p className={styles.controls__amount}>{quantity}</p>
            <img src={plus} alt="plus" onClick={() => handleQuantity('add')} />
          </section>
          <Button
            style={{ boxShadow: '0px 20px 50px -20px #FF7E1B' }}
            onClick={() => AddItem(product, quantity)}
          >
            Add to cart
          </Button>
        </section>
      </section>
    </section>
  );
};
