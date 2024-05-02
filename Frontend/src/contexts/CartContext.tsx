import React, { createContext, useState, useContext, ReactNode } from "react";

interface CartContextType {
  cart: number[];
  addToCart: (gameID: number) => void;
  removeFromCart: (gameID: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (gameID: number) => {
    setCart((prevCart) => [...prevCart, gameID]);
  };
  const removeFromCart = (gameID: number) => {
    if (cart.includes(gameID)) {
      setCart((prevCart) => prevCart.filter((id) => id !== gameID));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
