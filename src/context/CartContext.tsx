import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";
import { createContext } from "react";

type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productSlug: string) => void;
    clearCart: () => void;
    totalPrice: number;
    totalItems: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
