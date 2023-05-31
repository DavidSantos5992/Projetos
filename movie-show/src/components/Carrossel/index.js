import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
function Carrossel() {
    const slides = [
        {
            url: 'https://nerdhits.com.br/wp-content/uploads/2022/09/As-10-series-de-anime-mais-caras-de-todos-os-tempos-e-quanto-custam-para-produzir-768x402.jpg'
        },

        {
            url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/demon_slayer_outros_animes_1__x0n4h9qa1-1210x544.jpg',
        },

        {
            url: 'https://d33wubrfki0l68.cloudfront.net/000b6c76886f018a48c2719ba911ff2f829d981b/718b7/static/db9c8ff0ad90fdc2d4333bb0b6c24b2c/d4e1a/animes-da-temporada-de-primavera-de-2023-1.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(newIndex)
    };

    const nextSlide = () => { }

    return (
        
        <div className=" max-w[1400px] h-[780px] w-full m-auto py-16 px-4 group">

            <div style={{ backgroundImage: `url(${slides[0].url})` }} className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 relative ">

                <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight size={30} />
                </div>

            </div>
        </div>

    )
}

export default Carrossel