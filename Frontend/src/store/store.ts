import axios from "axios";

import { create } from "zustand";

export const useButtonStore = create((set) => ({
  buttonIndex: 0,
  setButtonIndex: (index: number) => set(() => ({ buttonIndex: index })),
}));

export const useSidebarStore = create((set) => ({
  buttonIndex: 0,
  setButtonIndex: (index: number) => set(() => ({ buttonIndex: index })),
}));

export type FormContextTypes = {
  Form: {
    username: string;
    email: string;
    bio: string;
    picture: any[];
    tags: [string];
  };
};

export const useFormStore = create((set) => ({
  Form: {
    ID: "",
    username: " ",
    email: " ",
    bio: " ",
    picture: "",
    tags: [],
    walletAddress: "",
    CreatedAt: " ",
    DeletedAt: "",
    UpdatedAt: "",
    gamesOwned: [],
  },
  setForm: (updatedForm: FormContextTypes) =>
    set(() => ({ Form: updatedForm })),
}));

const getData = async () => {
  const userID = JSON.parse(sessionStorage.getItem("current-user"))?.ID;
  const result = await axios.get(
    `http://localhost:8080/api/wish-list/${userID}?token=3y0clekizk08e1uhqx8uq8gvm1xhs1`
  );
  return result.data;
};

interface CartState {
  cart: string[];
  addToCart: (gameID: string) => void;
  removeFromCart: (gameID: string) => void;
}
interface WishlistState {
  wishlist: string[];
  addToWishlist: (gameID: string) => void;
  removeFromWishlist: (gameID: string) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  addToWishlist: (gameID: string) => {
    set((state) => ({ wishlist: [...state.wishlist, gameID] }));
  },
  removeFromWishlist: (gameID: string) => {
    set((state) => ({
      wishlist: state.wishlist.filter((id) => id !== gameID),
    }));
  },
}));
getData().then((wishlistData) => {
  const ids = wishlistData.map((item) => item.id);
  useWishlistStore.setState({ wishlist: ids });
});

export const useCartStore = create<CartState>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  addToCart: (gameID) => {
    set((state) => {
      const newCart = [...state.cart, gameID];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeFromCart: (gameID) => {
    set((state) => {
      const newCart = state.cart.filter((id) => id !== gameID);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
}));
