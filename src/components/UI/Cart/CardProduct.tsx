import Image from "../Image"
import defaultData from '../../../data/default'
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
const CardProduct = ({data} : {data:any}) => {
  return (
    
    <div className="max-w-sm bg-white border border-gray-200 shadow relative ">
    <div className="text-white bg-primary rounded-md p-1 w-[50px] text-center absolute top-2 right-2">55<span>%</span></div>
   
    <a href="#">
        <Image style='h-[200px] w-full' src={data.images[0] != null ? data.images[0] : defaultData.img_product} ></Image>
    </a>
    <div className="p-5 relative mt-[-40px] bg-white">
        <a href="#">
            <h6 className="mb-2  font-bold tracking-tight text-title pt-4">{data.title}</h6>
        </a>
        <h6 className="mb-3 font-semibold text-red-d0021c  ">{VND.format(data.price)}</h6>
       
    </div>
</div>
  )
}

export default CardProduct