import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext should be in CartProvider context');
  }
  return context;
};
