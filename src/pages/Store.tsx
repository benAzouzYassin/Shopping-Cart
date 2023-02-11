import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import ItemCard from '../components/ItemCard'
import data from "../data/items.json"
import { CartContext } from '../context/CartContext'
export default function Store() {
    const cart = useContext(CartContext)

    return (
        <div><Navbar />
            <main className='gap-y-5  paddings grid place-items-center pt-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-[#F9F9F9] min-h-[1000px]'>
                {data.map(item => <ItemCard itemImg={item.imgUrl} itemTitle={item.name} price={item.price} itemId={String(item.id)} key={item.id} countInCart={cart.getItemCount!(String(item.id))} />)}
            </main>
        </div>
    )
}
