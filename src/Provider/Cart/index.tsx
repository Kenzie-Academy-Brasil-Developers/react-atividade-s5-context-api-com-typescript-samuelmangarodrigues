import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<CartProviderDatas>({} as CartProviderDatas);
export const useCart = () => useContext(CartContext);

interface CartProviderProp {
  children: ReactNode;
}
interface CartProviderDatas {
  cart: Products[];
  addProduct: (product: Products) => void;
  deleteProduct: (product: Products) => void;
}
interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const CartProvider = ({ children }: CartProviderProp) => {
  const [cart, setCart] = useState<Products[]>([]);

  const addProduct = (product: Products) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Products) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};
