import { useState, useEffect } from 'react'
import shopper1 from '../assets/banners/shopper 1.jpg'
import shopper2 from '../assets/banners/shopper 2.avif'
import shopper3 from '../assets/banners/shopper 3.avif'
import shopper4 from '../assets/banners/shopper 4.avif'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const ImageSlider = () => {
    const slides = [
        {
            image: shopper1,
            title: "Summer Collection 2024",
            subtitle: "Discover the latest trends in fashion",
            button: "Shop Now"
        },
        {
            image: shopper2,
            title: "Up to 50% Off",
            subtitle: "Limited time offer on selected items",
            button: "Get Deals"
        },
        {
            image: shopper3,
            title: "New Arrivals",
            subtitle: "Fresh styles just landed in store",
            button: "Explore"
        },
        {
            image: shopper4,
            title: "Free Shipping",
            subtitle: "On orders over $50 - Shop today!",
            button: "Start Shopping"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [slides.length])

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="relative w-full h-64 md:h-96 lg:h-125 overflow-hidden bg-gray-200">
            {/* Images with Overlay Content */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-[center_15%]"
                        />

                        {/* Dark Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="text-white text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 drop-shadow-lg">
                                {slide.subtitle}
                            </p>
                            <button className="bg-white text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                                {slide.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
            >
                <BiChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
            >
                <BiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default ImageSlider