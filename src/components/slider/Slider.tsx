import { next, previus } from '../../assets';
import { ActionTypes } from '../../hooks/useSlide';
import styles from './Slider.module.css';

interface Props {
  handleImgChange: any;
  viewImg: any;
  imgs: any[];
  className?: string;
}

export const Slider = ({
  handleImgChange,
  viewImg,
  imgs,
  className = '',
}: Props) => {

  return (
    <section className={`${styles.slider} ${styles[`${className}`]}`}>
      <section
        className={styles.arrow__container}
        onClick={() => handleImgChange(ActionTypes.DECRESE)}
      >
        <img src={previus} alt="previus" className={styles.previus} />
      </section>
      <img src={imgs[viewImg]} alt="product" className={styles.product} />
      <section
        className={styles.arrow__container}
        onClick={() => handleImgChange(ActionTypes.INCRESE)}
      >
        <img src={next} alt="next" className={styles.next} />
      </section>
    </section>
  );
};
