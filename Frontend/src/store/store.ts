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
    username: "",
    email: "",
    bio: "",
    picture: "",
    tags: [],
  },
  setForm: (updatedForm: FormContextTypes) =>
    set(() => ({ Form: updatedForm })),
}));

export const useWishListStore = create((set) => ({
  wishlist: [],
  addToWishlist: (item: any) =>
    set((state) => ({ wishlist: [...state.wishlist, item] })),
  removefromWishlist: (item: any) =>
    set((state) => ({
      wishlist: state.wishlist.filter((element: any) => element.id != item.id),
    })),
}));
