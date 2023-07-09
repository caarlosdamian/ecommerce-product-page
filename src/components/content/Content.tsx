import { imgArray } from '../../utils/contentUtil';
import { Slider } from '../slider/Slider';
import styles from './Content.module.css';

export const Content = () => {
  return (
    <section className={styles.container}>
      <Slider imgs={imgArray}/>
      <section className={styles.info}></section>
    </section>
  );
};
