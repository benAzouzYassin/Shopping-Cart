import { createContext, useEffect, useState } from "react";

type CartProviderPros = {
    children: JSX.Element
}

type CartItemType = {
    id: string,
    count: number
}


type CartType = {
    itemsCount?: number,
    addItem?: (itemId: string) => void,
    removeItem?: (itemId: string) => void,
    getItemCount?: (itemId: string) => number
    addNewItem?: (newItem: CartItemType) => void
    rezero?: (itemId: string) => void
}




export const CartContext = createContext<CartType>({})

export function CartProvider(props: CartProviderPros) {

    const [cartItems, setCartItems] = useState<CartItemType[]>(JSON.parse(localStorage.getItem("cartItems") || "[]"))//ex:[{id: , count:},{id:,count:}]

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const cartItemsCount = cartItems.length

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
        console.log(itemId);
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



    const contextValue: CartType = { rezero: rezero, addNewItem: addNewItem, itemsCount: cartItemsCount, addItem: addCartItem, removeItem: cartRemoveItem, getItemCount: getItemCount }

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}