import { useContext } from "react"
import { CartContext } from "../context/CartContext"

type ItemCardPros = {
    itemImg: string,
    itemTitle: string,
    price: number
    countInCart: number
    itemId: string

}

export default function ItemCard(props: ItemCardPros) {
    const cart = useContext(CartContext)

    return (
        <div className=" w-[90%] h-96 bg-white rounded-2xl shadow-md flex flex-col">

            <div style={{ backgroundImage: `url("${props.itemImg}")` }} className={`w-full h-2/3 ItemCard__card-img rounded-t-lg`}></div>

            <div className="flex ml-5 mr-5 mt-4"> <h2 className="text-2xl font-[600]">{props.itemTitle}</h2> <h3 className="ml-auto mt-3 text-xl font-[500] text-zinc-400">{props.price} $US</h3></div>

            {props.countInCart == 0 && <button className=" self-center mt-3 text-center w-[90%] text-white pt-1 pb-1 rounded-md bg-blue-600 hover:bg-blue-700" onClick={() => cart.addNewItem!({ id: String(props.itemId), count: 1 })}>+ Add To Cart</button>}

            {props.countInCart > 0 && <div className=" self-center flex flex-row mt-3"> <button onClick={() => cart.removeItem!(props.itemId)} className="pr-4 pt-1 hover:bg-blue-600 pb-1 pl-4 rounded-md text-lg text-white font-medium bg-blue-500">-</button><p className="ml-2 mr-2"><span className="text-2xl">{props.countInCart}</span> in Cart</p> <button onClick={() => cart.addItem!(props.itemId)} className="pr-4 pt-1 hover:bg-blue-600 pb-1 pl-4 rounded-md text-base text-white font-medium bg-blue-500">+</button></div>}

            {props.countInCart > 0 && <button className="bg-red-700 hover:bg-red-800 w-fit self-center mt-3 mb-3  text-zinc-100 pt-1 pb-1 pr-2 pl-2 rounded text-xs" onClick={() => cart.rezero!(props.itemId)}>Remove</button>}

        </div>
    )
}
