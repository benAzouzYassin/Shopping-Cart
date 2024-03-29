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
        <div className=" w-[90%] h-64 xl:h-96 bg-white rounded-2xl shadow-md flex flex-col">

            <div style={{ backgroundImage: `url("${props.itemImg}")` }} className={`w-full h-2/3 ItemCard__card-img rounded-t-lg`}></div>

            <div className="flex ml-1 xl:ml-5 xl:mr-5 mt-4"> <h2 className="text-base xl:text-2xl font-[600]">{props.itemTitle}</h2> <h3 className="ml-auto mt-3 text-[11px] pr-1 pl-2  md:text-[13px] xl:text-[18px] font-medium xl:font-bold text-zinc-400">{props.price} $US</h3></div>

            {props.countInCart == 0 && <button className=" self-center mt-3 text-center lg:w-[90%] p-[2px] text-white sm:text-base text-xs pt-1 pb-1 rounded-md bg-blue-600 hover:bg-blue-700 w-[65%] mb-2" onClick={() => cart.addNewItem!({ id: String(props.itemId), count: 1, img: props.itemImg, price: props.price, title: props.itemTitle })}>+ Add To Cart</button>}

            {props.countInCart > 0 && <div className=" self-center flex flex-row mt-3"> <button onClick={() => cart.removeItem!(props.itemId)} className="xl:pr-4 pr-[6px] pl-[6px] ml-1 self-center h-[30px] md:h-fit pt-1 hover:bg-blue-600 pb-1 xl:pl-4 rounded-md text-base text-white font-medium bg-blue-500">-</button><p className="ml-2 mr-2"><span className="text-xl lg:text-2xl">{props.countInCart}</span> in Cart</p> <button onClick={() => cart.addItem!(props.itemId)} className="xl:pr-4 pr-1 pl-1 mr-1 self-center h-[30px] md:h-fit pt-1 hover:bg-blue-600 pb-1 xl:pl-4 rounded-md text-base text-white font-medium bg-blue-500">+</button></div>}

            {props.countInCart > 0 && <button className="bg-red-700 hover:bg-red-800 w-fit self-center mt-3 mb-3  text-zinc-100 pt-1 pb-1 pr-2 pl-2 rounded text-xs" onClick={() => cart.rezero!(props.itemId)}>Remove</button>}

        </div>
    )
}
