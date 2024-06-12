import React, { useState } from 'react';
import styled from 'styled-components';
import  test1 from '../images/test-1.png';
import test2 from '../images/test-2.png';
import test3 from '../images/test-3.png';

// Define the images array
const images = [
    'https://www.thecambridgeschool.org/wp-content/uploads/2023/10/ryan-1024x576.png',
    'https://www.thecambridgeschool.org/wp-content/uploads/2023/10/brady-1024x576.png',
    'https://www.thecambridgeschool.org/wp-content/uploads/2023/10/bobby-1024x576.png',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="testimonial-box relative w-full max-w-2xl  mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 h-[50vh]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} className="testimonials-image w-full h-25 flex-shrink-0" />
                    ))}
                </div>
            </div>
            <button onClick={prevSlide} className=" left-arrow absolute top-[36%] md-top-1/2 md-left-4 transform -translate-y-1/2 bg-black  rounded-full p-2 shadow-lg">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:w-[90%] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button
                onClick={nextSlide} className=" right-arrow absolute top-[36%] md-top-1/2 right-1 md-right-4 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:w-[90%] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    );
};

export default Carousel;
const LandingPage = styled.div`


 .left-arrow {
    position: absolute;
    top: 1/4;
    left: 2;
 }

`;
