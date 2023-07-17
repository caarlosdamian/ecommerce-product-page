import { useEffect, useMemo, useState } from 'react';
import styles from './DesktopSlider.module.css';
import { Slider } from '../slider/Slider';
import { useSlide } from '../../hooks/useSlide';
import { useSidebarContext } from '../../hooks';

export const DesktopSlider = ({
  imgs,
  clasName = '',
  hidde = '',
}: {
  imgs: string[];
  clasName?: string;
  hidde?: string;
}) => {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const { handleImgChange, viewImg } = useSlide(imgs);
  const { handleSliderToggle } = useSidebarContext();

  useEffect(() => {
    setSelectedImg(imgs[viewImg]);
  }, [imgs, viewImg]);

  const indexImg = useMemo(
    () => imgs.findIndex((elem) => selectedImg === elem),
    [selectedImg, imgs]
  );
  return (
    <div
      className={`${styles.container} ${styles[`${clasName}`]}  ${
        styles[`${hidde}`]
      }`}
    >
      <div className={styles.wrapper__img}>
        {clasName ? (
          <Slider
            imgs={imgs}
            handleImgChange={handleImgChange}
            viewImg={indexImg}
          />
        ) : (
          <img
            src={selectedImg}
            alt={selectedImg}
            className={styles.principal}
            onClick={handleSliderToggle}
          />
        )}
      </div>
      <div className={styles.wrapper__thump}>
        {imgs.map((item) => (
          <img
            className={`${styles.secondary} ${
              selectedImg === item ? styles.selected : ''
            }`}
            src={item}
            alt={item}
            key={item}
            onClick={() => setSelectedImg(item)}
          />
        ))}
      </div>
    </div>
  );
};
