
import React, { useState, forwardRef, useImperativeHandle } from "react";

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
        <div className="relative w-full max-w-2xl p-4 max-h-full bg-gray-900 rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-orange-200 dark:text-white">
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

            <div className="p-4 space-y-4 flex justify-between">
              <img className="w-1/2" src={data.images[0]} alt={data.name} />
              <div className="flex flex-col text-stone-200 w-1/2 pl-3">
                <p className="py-1">
                  {`Date: ${data.date}`}
                </p>
                <p className="py-1">
                  {`Durée: ${data.time}`}
                </p>
                <p className="py-1">
                  {`Langage: ${data.language}`}
                </p>
                <p className="py-1">
                  {`Equipe: ${data.equipe} personnes`}
                </p>
                <p className="py-1">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600"> 
              {Object.entries(data.links).map(([key, link]) => ( 
                <div key={key}> 
                  <a href={link.url} className="text-blue-500">{key}</a> 
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
      aria-hidden="true"
    >
      {modalContent}
    </div>
  );
});

export default MyModal;