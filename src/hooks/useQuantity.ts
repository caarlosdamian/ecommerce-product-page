import { useState } from 'react';

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type?: string) => {
    if (type === 'add') {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  return { handleQuantity, quantity };
};



