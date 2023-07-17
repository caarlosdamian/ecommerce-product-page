import { DesktopSlider } from '..';
import { Overlay } from '../overlay/Overlay';
import { useSidebarContext } from '../../hooks';
import { imgArray } from '../../utils/contentUtil';

export const DesktopSliderOverlay = () => {
  const { handleSliderToggle } = useSidebarContext();

  return (
    <>
      <DesktopSlider imgs={imgArray} clasName="overlay" />
      <Overlay clickAction={handleSliderToggle} />
    </>
  );
};
