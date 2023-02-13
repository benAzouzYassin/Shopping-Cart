import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCard from '../components/CartCard'
import Navbar from '../components/Navbar'

export default function cart() {

    const cart = useContext(CartContext)
    function toDollar(number: number) {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    }
    return (
        <div className='flex flex-col first-letter:min-h-[100vh]'>
            <Navbar />
            <div className='mt-10 paddings'>{cart.getcartItems!().map(item => <CartCard key={item.id} id={item.id} title={cart.getItemTitle!(item.id) || "No title"} img={item.img} price={item.price} countInCart={cart.getItemCount!(item.id)} />)}</div>
            {cart.getcartItems!().length == 0 && <h1 className='text-center text-5xl text-gray-400 mt-[35vh]'>There are no items.</h1>}
            {cart.getcartItems!().length != 0 && <p className='ml-auto mr-[200px] text-5xl font-semibold'><span className='text-5xl font-bold'>Total : </span>{toDollar(cart.getTotalPrice!())}</p>} </div>
    )
}
