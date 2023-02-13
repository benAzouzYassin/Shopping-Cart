import { createContext, useEffect, useState } from "react";

type CartProviderPros = {
    children: JSX.Element
}

type CartItemType = {
    id: string,
    count: number
    img: string
    price: number
    title: string
}


type CartType = {
    itemsCount?: number,
    addItem?: (itemId: string) => void,
    removeItem?: (itemId: string) => void,
    getItemCount?: (itemId: string) => number
    addNewItem?: (newItem: CartItemType) => void
    rezero?: (itemId: string) => void
    getcartItems?: () => CartItemType[]
    getItemTitle?: (itemId: string) => string | null
    getTotalPrice?: () => number
}




export const CartContext = createContext<CartType>({})

export function CartProvider(props: CartProviderPros) {

    const [cartItems, setCartItems] = useState<CartItemType[]>(JSON.parse(localStorage.getItem("cartItems") || "[]"))

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const cartItemsCount = cartItems.length

    function getItemTitle(itemId: string) {
        let title = ""
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id == itemId) {
                title = cartItems[i].title
            }
        }
        console.log(itemId)
        return title
    }

    function addCartItem(itemId: string) {
        let newItems = [...cartItems];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].id == itemId) {
                newItems[i].count += 1;
            }
        }
        setCartItems(newItems);
    }

    function rezero(itemId: string) {

        const newCartItems = cartItems.filter(item => item.id != itemId);
        setCartItems(newCartItems);

    }

    function cartRemoveItem(itemId: string) {
        let newItems = [...cartItems];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].id == itemId && newItems[i].count > 1) {
                newItems[i].count -= 1;
                setCartItems(newItems);
            } else if (newItems[i].id == itemId && newItems[i].count == 1) {
                rezero(itemId);

            }
        }


    }

    function getItemCount(itemId: string) {
        const item: CartItemType | undefined = cartItems.find((item) => {
            if (item.id == itemId)
                return true;
        });

        return item ? item.count : 0;
    }

    function addNewItem(newItem: CartItemType) {
        setCartItems(oldItems => [...oldItems, newItem]);
    }

    function getcartItems() {
        return cartItems
    }
    function getTotalPrice() {
        return cartItems.reduce((sum, current) => {
            return sum + (current.price * current.count)
        }, 0)
    }


    const contextValue: CartType = { getTotalPrice: getTotalPrice, getItemTitle: getItemTitle, getcartItems: getcartItems, rezero: rezero, addNewItem: addNewItem, itemsCount: cartItemsCount, addItem: addCartItem, removeItem: cartRemoveItem, getItemCount: getItemCount }

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}