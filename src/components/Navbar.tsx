import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import { CartContext } from '../context/CartContext';

export default function Navbar() {

    const cart = useContext(CartContext)

    const Navigate = useNavigate()


    const { pathname } = useLocation()


    let links: JSX.Element[];


    switch (pathname) {
        case "/":
            links = [<Link to="/" key={uuid()} className='text-stone-700 hover:text-stone-800'>Home</Link >, <Link to="/store" key={uuid()} className='hover:text-stone-800'>Store</Link >]
            break;
        case "/store":
            links = [<Link to="/" key={uuid()} className='hover:text-stone-800'>Home</Link >, <Link to="/store" key={uuid()} className='text-stone-700 hover:text-stone-800'>Store</Link >]
            break
        case "/about":
            links = [<Link to="/" key={uuid()} className='hover:text-stone-800'>Home</Link >, <Link to="/store" key={uuid()} className='hover:text-stone-800'>Store</Link >]
            break
        default:
            links = [<Link to="/" key={uuid()} className='hover:text-stone-800'>Home</Link >, <Link to="/store" key={uuid()} className='hover:text-stone-800'>Store</Link >]
            break;
    }





    return (
        <div className='paddings  w-full h-14 items-center shadow-md  sticky top-0 flex gap-8 text-stone-400  text-xl bg-white z-10'>

            {links}
            <div className='relative ml-auto mt-5'>
                {pathname != "/cart" && <><div className='rounded-xl bg-blue-500 w-10 h-10 flex items-center justify-center hover:cursor-pointer hover:bg-blue-400' onClick={() => Navigate("/cart")}><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"

                    viewBox="0 0 576 512"
                    fill="white"
                >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                </div>
                    <div className='h-5 w-5 bg-red-600 translate-x-[110%] translate-y-[-70%] rounded-full flex justify-center items-center text-sm font-[500] text-white'>{cart.itemsCount}</div></>}
            </div>

        </div >
    )
}
