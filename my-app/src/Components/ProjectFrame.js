export default function ProjectFrame({data}){

    return (
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
        <img
        src={data.images[0]}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
        alt= {`${data.title} project image `}
        />
        </div>
    )

}