import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import data from "../data/items.json"
export default function Home() {
    const Navigate = useNavigate()

    let [carouselCount, setCarouselCount] = useState(0)
    const images = data.map(item => item.imgUrl)


    setInterval(() => {
        if (carouselCount <= images.length - 2) {
            setCarouselCount(carouselCount += 1)

        } else {

            setCarouselCount(carouselCount = 0)

        }

    }, 7000)
    function getFrontImage() {

        return images[carouselCount]
    }

    function getRightImage() {
        if (carouselCount == images.length - 1) {
            return images[0]
        } else {
            return images[carouselCount + 1]
        }
    }
    function getLeftImage() {
        if (carouselCount == 0) {

            return images[images.length - 1]
        } else {
            return images[carouselCount - 1]
        }
    }

    return (
        <div><Navbar />
            <div className='paddings flex flex-col top-28 relative pb-10'>
                <h1 className='text-center text-4xl mb-4 text-zinc-800'>You deserve the best .</h1>
                <h3 className='text-center text-zinc-700 ml-2 mr-2 py-4'>We have made quality our habit. it's not something that we just strive for - we </h3>
                <h3 className='mt-[-0.75rem] text-center text-zinc-700'>live by this principle evrey day.</h3>
                <button onClick={() => Navigate('/store')} className='mt-10 text-md bg-blue-500 text-stone-100 rounded-md  w-36 h-10 self-center hover:bg-blue-600 '>Our Products</button>

                {/**should be a carousel here */}
                <div className='flex justify-center w-full h-fit items-center mt-10 flex-wrap gap-7 transition-ease relative'>
                    <div className="w-[22%] h-[300px] blur-[2px] rounded-lg" style={{ backgroundImage: `url('${getLeftImage()}')`, backgroundSize: "cover", backgroundPosition: "center" }}> </div>
                    <div className="w-[26%] h-[350px] rounded-lg" style={{ backgroundImage: `url('${getFrontImage()}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="w-[22%] h-[300px] blur-[2px] rounded-lg" style={{ backgroundImage: `url('${getRightImage()}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                </div>
            </div>
        </div >
    )
}
