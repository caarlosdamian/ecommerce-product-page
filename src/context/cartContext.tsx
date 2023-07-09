import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = (props: any) => {
  const [show, setShow] = useState(false);
  const value = { show, setShow };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext should be in CartProvider context');
  }
  return context;
};
