"use client";

import Image from "next/image"
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs"
import {  useState } from "react";
import Link from "next/link";
import slides from "../data/products.json"


const Carousel = () => {
    const [slide , setSlide] = useState(0);
    // const [slides , setSlides] = useState([1,2,3])
    const getNextSlide = () => {
        setSlide((slide) => slide === slides.length-1 ? 0 : slide+1)
    }
    const getPreviousSlide = () => {
        setSlide((slide) => slide === 0 ? slides.length-1 : slide - 1)
    }

    return (
         <div className="relative w-full lg:w-[90%] mx-auto py-10 h-[500px] overflow-hidden bg-gray-200 rounded-xl">
      <BsArrowLeftCircleFill
        className="absolute top-1/2 left-4 z-10 text-3xl text-white cursor-pointer hover:scale-110 transform -translate-y-1/2 transition"
        onClick={getPreviousSlide}
      />

      <BsArrowRightCircleFill
        className="absolute top-1/2 right-4 z-10 text-3xl text-white cursor-pointer hover:scale-110 transform -translate-y-1/2 transition"
        onClick={getNextSlide}
      />

      {slides?.map(({ title, id, image, description }, index) => (
        <div
          key={id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
            slide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <h1 className="text-2xl font-bold text-white bg-black/50 px-6 py-2 rounded mb-4">
            {title}
          </h1>

          <div className="relative w-full h-80 max-w-4xl rounded overflow-hidden shadow-lg">
            <Image
              src={`/${image}`}
              alt={title}
              fill
              className="object-cover"
            /> 
          </div>

          <Link
            href={`/products/${id}`}
            className="mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-blue-800 transition"
          >
            Know more
          </Link>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              slide === index ? "bg-indigo-600" : "bg-gray-50"
            }`}
          />
        ))}
      </div>
    </div>
    )
}

export default Carousel