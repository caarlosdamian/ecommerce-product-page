import { next, previus } from '../../assets';
import { ActionTypes, useSlide } from '../../hooks/useSlide';
import styles from './Slider.module.css';

export const Slider = ({ imgs = [] }: { imgs: string[] }) => {
  const { handleImgChange, viewImg } = useSlide(imgs);

  return (
    <section className={styles.slider}>
      <section
        className={styles.arrow__container}
        onClick={() => handleImgChange(ActionTypes.DECRESE)}
      >
        <img src={previus} alt="previus" className={styles.previus} />
      </section>
      <img src={imgs[viewImg]} alt="product" className={styles.product} />
      <section
        className={styles.arrow__container}
        onClick={() => handleImgChange(ActionTypes.DECRESE)}
      >
        <img src={next} alt="next" className={styles.next} />
      </section>
    </section>
  );
};
