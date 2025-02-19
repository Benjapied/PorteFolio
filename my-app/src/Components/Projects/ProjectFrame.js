import ModalManager from './ModalManager.js';

export default function ProjectFrame({data}){

    const OpenModal = (project) => {
        if (ModalManager.getModalRef().current) {
            ModalManager.getModalRef().current.openModal(project);
        }
    };

    return (
        <div className="hidden duration-700 ease-in-out w-full bg-gray-600" data-carousel-item>

        <h2 className="text-white lg:text-2xl text-5xl lg:text-4xl lg:py-3 font-semibold flex flex-col justify-center items-center">{data.name}</h2>

        <img
        src={data.images[0]}
        className="absolute block h-5/6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain px-5"
        alt= {`${data.name} project image `}
        onClick={() => {OpenModal(data)}}
        />
        </div>
    )

}