
import React, { useState, forwardRef, useImperativeHandle } from "react";
import fillImage from "../Tools";


const GetDescriptionLineBreak = (description) => {
// Préparez le texte formaté avant de retourner le JSX
const formattedDescription = description.split('\n').map((line, index) => (
  <React.Fragment key={index}>
      {line}
      <br />
  </React.Fragment>
));

return (
  <p className="py-1">
      {formattedDescription}
  </p>
);
};

const MyModal = forwardRef((props, ref) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

const handleCloseModal = () => {
setIsModalOpen(false);
setModalContent(null);
};

// Méthodes exposées au parent
useImperativeHandle(ref, () => ({
openModal: (data) => {
  setModalContent(
    <div className="relative w-full h-full md:min-h-5/6 md:min-h-2/3 md:w-2/3 bg-gray-900 object-contain rounded-lg shadow dark:bg-gray-700
    grid grid-rows-[auto] gap-4 content-around overflow-y-auto overflow-x-hidden scrollbar-hide">
        {/* Modal header */}
        <div className="flex w-full items-center justify-between p-4 border-b rounded-t dark:border-gray-600 row-span-1">
          <h3 className="text-3xl font-semibold text-orange-200 pl-10">
            {data.name}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleCloseModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="grid grid-rows-[auto] lg:grid-cols-2 lg:grid-rows-2 gap-4 p-4 space-y-4 lg:flex-row lg:justify-between row-span-6 inline max-w-full">
          <div className="flex flex-col text-stone-200 mx-3 pl-3">
            <div className="flex flex-wrap w-full">
              <div className="flex py-1 pr-2 lg:pr-6">
                <p className="font-bold">
                  Date:&nbsp;
                </p>
                <p>
                  {` ${data.date}`}
                </p>
              </div>

              <div className="flex py-1 pr-2 lg:pr-6">
                <p className="font-bold">
                  Durée:&nbsp;
                </p>
                <p>
                  {` ${data.time}`}
                </p>
              </div>

              <div className="flex py-1 pr-2 lg:pr-6">
                <p className="font-bold">
                  Equipes:&nbsp;
                </p>
                <p>
                  {` ${data.equipe} personnes`}
                </p>
              </div>

            </div>
            <div className="flex pr-1">
              <p className="font-bold">
                Language:&nbsp;
              </p>
              <p className="underline">
                {` ${data.language}`}
              </p>
            </div>  

            {GetDescriptionLineBreak(data.description)}
            
          </div>

          {Object.entries(data.images).map(([key, img]) => {
            const isVideo = img.endsWith(".mp4");

            return isVideo ? (
            <video key={key} className="object-contain w-full py-2" controls>
              <source src={`${process.env.PUBLIC_URL}` + img} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            ) : (
            <img key={key} className="object-contain w-full py-2" src={`${process.env.PUBLIC_URL}` + img} alt={`${data.name} project image`} />
            );
          })}

        </div>

        {/* Modal footer */}
        <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600 md:row-span-1 "> 
          {Object.entries(data.links).map(([key, link]) => ( 
            <div key={key} className="p-2"> 
              <a  href={link} 
                  target="_blank"
                  className="flex items-center justify-center h-full px-2"
                >
                  <span className={`icon-${key} myIcon hover:scale-110 transition duration-200`}></span>
                </a>
            </div> 
          ))}
        </div>
      </div>
  );
  setIsModalOpen(true);
},
closeModal: handleCloseModal,
}));

if (!isModalOpen) return null;

return (
<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden"
  aria-hidden="true"
>
  {modalContent}
</div>
);
});

export default MyModal;