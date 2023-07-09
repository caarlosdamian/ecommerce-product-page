import { useMemo, useState } from 'react';

export const ActionTypes = {
  DECRESE: 'DECRESE',
  INCRESE: 'INCRESE',
} as const;

type Action = 'DECRESE' | 'INCRESE';

export const useSlide = (imgArr: string[]) => {
  const [viewImg, setviewImg] = useState(0);
  const lastItem = useMemo(() => imgArr.length - 1, [imgArr]);
  const handleImgChange = (type: Action) => {
    if (viewImg === lastItem) {
      setviewImg(0);
    } else if (type === ActionTypes.INCRESE) {
      setviewImg((prev) => prev + 1);
    } else if (viewImg === 0) {
      setviewImg(lastItem);
    } else {
      setviewImg((prev) => prev - 1);
    }
  };
  return { handleImgChange, viewImg };
};
