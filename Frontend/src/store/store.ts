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

// export const useWishListStore = create((set) => ({
//   wishlist: [],
//   addToWishlist: (item: any) =>
//     set((state) => ({ wishlist: [...state.wishlist, item] })),
//   removefromWishlist: (item: any) =>
//     set((state) => ({
//       wishlist: state.wishlist.filter((element: any) => element.id != item.id),
//     })),
// }));

interface Game {
  index: number;
  url: string;
  name: string;
}

interface GameDetails {
  id: number;
  name: string;
  cover: {
    url: string;
  };
}

type Wishlist = Game | GameDetails;
type Cart = Game | GameDetails;

interface CartState {
  cart: Cart[];
  addToCart: (game: Cart) => void;
  removeFromCart: (gameID: number) => void;
}

interface WishlistState {
  wishlist: Wishlist[];
  addToWishlist: (game: Wishlist) => void;
  removeFromWishlist: (gameID: number) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  addToWishlist: (game: Wishlist) => {
    set((state) => ({ wishlist: [...state.wishlist, game] }));
  },
  removeFromWishlist: (gameID: number) => {
    set((state) => ({
      wishlist: state.wishlist.filter((game) => {
        if ("index" in game) {
          return game.index !== gameID;
        } else {
          return game.id !== gameID;
        }
      }),
    }));
  },
}));

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (game: Cart) => {
    set((state) => ({ cart: [...state.cart, game] }));
  },
  removeFromCart: (gameID: number) => {
    set((state) => ({
      cart: state.cart.filter((game) => {
        if ("index" in game) {
          return game.index !== gameID;
        } else {
          return game.id !== gameID;
        }
      }),
    }));
  },
}));

// export const useUserStore = create((set) => ({
//   user: {
//     ID: "",
//     username: " ",
//     email: " ",
//     bio: " ",
//     picture: "",
//     tags: [],
//     walletAddress: "",
//     CreatedAt: " ",
//     DeletedAt: "",
//     UpdatedAt: "",
//     gamesOwned: [],
//   },
//   setUser: (info: any) => {
//     set(() => ({ user: info }));
//   },
// }));
