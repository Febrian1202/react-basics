import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";
import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setItems((prev) => {
            const exist = prev.find((i) => i.slug === product.slug);
            return exist
                ? prev.map((i) => i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i)
                : [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productSlug: string) => setItems((prev) => prev.filter((i) => i.slug !== productSlug));

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = items.reduce((sum, item) => sum + item.harga * item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}