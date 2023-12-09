import Image from "../Image"
const CardWWO = ({data} : {data:any}) => {
  return (
    <div className=" bg-white border border-gray-200 shadow ">
    <a href="#">
        <Image style='' src={data.url_image} ></Image>
    </a>
    <div className="p-5 relative mt-[-40px] content_wwo bg-white">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-title pt-4">{data.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{data.short_content}</p>
        <a href={data.url_redirect} className="inline-flex items-center  py-2 text-sm  text-center font-bold text-title hover:text-primary focus:outline-none focus:ring-blue-300 ">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )
}

export default CardWWO