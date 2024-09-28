import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Dashboard from './Dashboard.jpeg';
import Overview from './Overview.jpeg';
import Problem from './Problem.jpeg';
import Vibe from './Vibe.jpeg';
import AppLinksForm from './AppLinks';

export default function Carousel({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      img: Dashboard,
      title: 'First Slide Label',
      description: 'Some representative placeholder content for the first slide.',
    },
    {
      img: Overview,
      title: 'Second Slide Label',
      description: 'Some representative placeholder content for the second slide.',
    },
    {
      img: Problem,
      title: 'Third Slide Label',
      description: 'Some representative placeholder content for the third slide.',
    },
    {
      img: Vibe,
      title: 'Fourth Slide Label',
      description: 'Some representative placeholder content for the fourth slide.',
    },
    {
      component: <AppLinksForm onClose={onClose} className="bg-root-1"/>, // Pass onClose to AppLinksForm
    },
  ];

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? prevIndex : prevIndex + 1));
  };

  const transitions = useTransition(slides[currentIndex], {
    key: currentIndex,
    from: { opacity: 0, transform: direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)' },
    config: { duration: 500 },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-gray-900 text-white py-4 text-center">
          <h1 className="text-xl">Welcome to App Reviews</h1>
        </div>

        <div className="relative overflow-hidden h-full pt-5"> {/* Adjust pt-12 for padding */}
          {transitions((style, item) => (
            <animated.div className="absolute w-full h-full" style={style}>
              {item.img ? (
                <div className="w-full h-full flex justify-center items-center" style={{ paddingTop: '1rem' }}> {/* Adjust paddingTop to shift the image up */}
                  <img
                    src={item.img}
                    className="object-cover w-full h-full max-h-full"
                    alt={item.title}
                    style={{ objectFit: 'contain' }} // Adjust this to "cover" or "contain" based on preference
                  />
                </div>
              ) : (
                item.component
              )}
              {item.title && (
                <div className="absolute inset-x-0 bottom-5 text-center text-black bg-white bg-opacity-70 py-2">
                  <h5 className="text-lg">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              )}
            </animated.div>
          ))}
        </div>

        {/* Carousel controls */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute bottom-60 left-1 text-white px-1 py-1 rounded-full focus:outline-none bg-black hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {currentIndex < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute bottom-60 right-1 text-white px-1 py-1 rounded-full focus:outline-none bg-black hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded-full focus:outline-none hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
