import React from 'react';
import ProjectFrame from './ProjectFrame';
import { useState } from 'react';
import { useLanguage } from '../../LanguageContext';

export default function ProjectCarousel({ projects, globalParam }) {
  const [activeIndex, setActiveIndex] = useState(0); // L'index de l'élément actif

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length); // Passe à l'élément suivant, retourne au début si c'est la dernière
  };

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    ); // Passe à l'élément précédent, retourne à la fin si c'est le premier
  };

  const GenerateSlides = () => {
    return projects.map((project, index) => {
      const isPrevious = index === (activeIndex - 1 + projects.length) % projects.length;
      const isNext = index === (activeIndex + 1) % projects.length;
      const isActive = index === activeIndex;

      return (
        <ProjectFrame
          key={project.id}
          data={project}
          isActive={isActive}
          isPrevious={isPrevious}
          isNext={isNext}
          globalParam={globalParam}
        />
      );
    });
  };

  return (
    <div id="controls-carousel" className="relative overflow-hidden" data-carousel>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] px-5 overflow-hidden rounded-lg">
        {/* Carousel Items */}
        {GenerateSlides()}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
