import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shopper1 from '../assets/banners/shopper 1.jpg'
import shopper2 from '../assets/banners/shopper 2.avif'
import shopper3 from '../assets/banners/shopper 3.avif'
import shopper4 from '../assets/banners/shopper 4.avif'
import TextOnSlider from './TextOnSlider';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <div className="w-full relative">
            <Slider {...settings}>
                {[shopper1, shopper2, shopper3, shopper4].map((image, index) => (
                    <div key={index} className="relative h-full md:h-[700px]">

                        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}></div>

                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        
                        <TextOnSlider/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;