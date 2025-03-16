import ModalManager from './ModalManager.js';

export default function ProjectFrame({ data, isActive, isPrevious, isNext, globalParam }) {
    const OpenModal = (project, globalParam) => {
      if (ModalManager.getModalRef().current) {
        ModalManager.getModalRef().current.openModal(project, globalParam);
      }
    };
  
    const firstImage = data.images.find((image) => !image.endsWith(".mp4"));
  
    return (
      <div
        className={`duration-700 ease-in-out w-full bg-gray-600 absolute inset-0 transition-all transform 
          ${isActive ? "opacity-100 translate-x-0 z-30" : ""}
          ${isPrevious ? "opacity-100 translate-x-[-100%] z-20" : ""}
          ${isNext ? "opacity-100 translate-x-[100%] z-10" : ""}
          ${!isActive && !isPrevious && !isNext ? "opacity-0 translate-x-0 z-0" : ""}
        `}
        data-carousel-item
      >
        <h2 className="text-white text-2xl lg:text-4xl lg:py-3 font-semibold flex flex-col justify-center items-center">
          {data.name}
        </h2>
  
        {firstImage && (
          <img
            src={`${process.env.PUBLIC_URL}${firstImage}`}
            className="absolute block h-5/6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain px-5"
            alt={`${data.name} project image`}
            onClick={() => OpenModal(data, globalParam)}
          />
        )}
      </div>
    );
  }