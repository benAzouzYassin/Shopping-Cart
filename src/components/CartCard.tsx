import { useContext } from "react"
import { CartContext } from "../context/CartContext"

type CartCardProps = {
    img: string
    title: string
    price: number
    countInCart: number
    id: string
}
export default function CartCard(props: CartCardProps) {
    const cart = useContext(CartContext)
    function removeItemFromCart() {
        cart.rezero!(props.id)
    }
    return (
        <div className="w-full flex flex-row border-[1px] rounded-xl mb-5 shadow-md h-[150px] xl:h-56 ">
            <div style={{ backgroundImage: `url(${props.img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-[35%] bg-slate-400 rounded-l-xl"></div>
            <div className="w-[65%] h-full  flex flex-col">
                <div className=" flex lg:pt-16 pl-3"><h2 className="text-2xl mr-1">{props.title}</h2><p className="text-gray-600 text-md mt-2">x{props.countInCart}</p></div>

                <p className="text-lg text-gray-500 pl-3 pt-2">${props.price}</p>
                <div className="flex ml-auto pr-5 mt-[-2.25rem]"> <p className="text-2xl">${props.price * props.countInCart}</p> <button onClick={removeItemFromCart} className="bg-white text-red-500 border-[1px] hover:bg-red-100 border-red-500 ml-2 w-9 h-9 rounded">X</button></div>
            </div>

        </div>
    )
}
