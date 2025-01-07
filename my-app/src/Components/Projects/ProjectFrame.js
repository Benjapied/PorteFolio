import ModalManager from './ModalManager.js';

export default function ProjectFrame({data}){

    const OpenModal = (project) => {
        if (ModalManager.getModalRef().current) {
            ModalManager.getModalRef().current.openModal(project);
        }
    };

    return (
        <div className="hidden duration-700 ease-in-out w-full " data-carousel-item 
        onClick={() => {OpenModal(data)}}>
        <img
        src={data.images[0]}
        className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain  px-5"
        alt= {`${data.name} project image `}
        />
        </div>
    )

}