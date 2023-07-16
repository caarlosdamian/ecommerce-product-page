import { createContext, useState } from 'react';
import { Product, ProductCart } from '../interfaces/contentInterfaces';

interface CartContextstate {
  items: ProductCart[];
  AddItem: (item: Product, quantity: number) => void;
  removeItem: (item: Product) => void;
}

export const CartContext = createContext<CartContextstate>({
  AddItem: () => undefined,
  removeItem: () => undefined,
  items: [],
});

export const CartProvider = (props: any) => {
  const [items, setitems] = useState<ProductCart[]>([]);
  const AddItem = (item: Product, quantity: number) => {
    const index = items.findIndex((element) => element.id === item.id);
    if (index !== -1) {
      const newItems = items.map((element: ProductCart) =>
        element.id === item.id
          ? {
              ...element,
              quantity: element.quantity + quantity,
              total: quantity * element.price,
            }
          : element
      );
      setitems(newItems);
    } else {
      setitems([
        ...items,
        { ...item, quantity: quantity, total: quantity * item.price },
      ]);
    }
  };

  const removeItem = (item: ProductCart) => {
    const newItems = items.filter((cartItem) => cartItem.id !== item.id);
    setitems(newItems);
  };
  const value = { items, AddItem, removeItem };
  return <CartContext.Provider value={value} {...props} />;
};
