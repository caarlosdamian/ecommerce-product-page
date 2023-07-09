import { close } from '../../assets';
import { useSidebarContext } from '../../context/sidebarContext';
import { categoriesInfo } from '../../utils/headerUtils';
import { Overlay } from '../overlay/Overlay';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const { show, handleToggle } = useSidebarContext();

  return (
    <aside className={`${styles.sidebar} ${show ? styles.show : ''}`}>
      <section className={styles.content}>
        <section className={styles.actions}>
          <img src={close} alt="close" className={styles.close} onClick={handleToggle} />
        </section>
        <ul className={styles.categories}>
          {categoriesInfo.map((category) => (
            <li className={styles.category} key={category.id}>
              {category.label}
            </li>
          ))}
        </ul>
      </section>
      <Overlay clickAction={handleToggle}/>
    </aside>
  );
};
