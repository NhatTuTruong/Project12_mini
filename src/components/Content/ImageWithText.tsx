import Image from "../UI/Image"
import imageLeft from '../../assets/images/category-img-1.jpg'
import { FaPhoneAlt } from "react-icons/fa";
const ImageWithText = () => {
    return (
        <>
            <div className="md:container md:mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 py-12 items-center">
                <Image style='max-w-full' src={imageLeft} ></Image>
                <div className="px-4 py-8">
                    <div>
                        <h5 className="text-primary">Our Services</h5>
                        <h2 className="leading-20 pb-5 text-title">Responsive & Professional</h2>
                        <p className="mb-3 text-gray-500 ">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                    </div>
                    <div className="pt-8">
                        <h6 className="text-title leading-10">Call us today</h6>
                        <h3 className="text-primary leading-10 flex items-center"><FaPhoneAlt className="text-lg mr-2" /><span>1900-111000</span></h3>
                        <p className="mb-3 text-gray-500">We're available 24/7, 365 days a year.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithText