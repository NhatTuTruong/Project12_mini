import Button from "../Button"
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
    name: yup.string().min(4).required(),
    phoneNumber: yup.string().min(10).max(10).required(),
    email: yup.string().email().required()
}).required();
type FormData = yup.InferType<typeof schema>;
const SubscribeForm = () => {
    const [nameT, setNameT] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = () => {
        toast('You have successfully registered');
        setNameT('');
        setPhone('');
        setEmail('');
    }

    return (
        <>
            <p className="mb-3 text-gray-500 text-center pb-4">Do not want to miss news, updates, note and any offer on our products, then please subscriber to our mailling list.</p>
            <div className='rounded-md bg-primary py-10'>
                <form className="mx-auto grid w-full gap-4 md:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-20 max-md:px-5" onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="">
                        <input type="text" {...register("name")} onChange={event => setNameT(event.target.value)} value={nameT} id="name" className="bg-gray-50 border w-[100%] border-gray-300 text-gray-900 text-sm rounded-sm py-[7px] focus:outline-none" placeholder="Your name" />
                        <p className="text-sm text-gray-200 font-extralight">{errors.name?.message}</p>
                    </div>
                    <div className="">
                        <input type="text" {...register("phoneNumber")} onChange={event => setPhone(event.target.value)} value={phone} id="phoneNumber" className="bg-gray-50 w-[100%] border border-gray-300 text-gray-900 text-sm rounded-sm py-[7px] focus:outline-none" placeholder="Your Mobile phone" />
                        <p className="text-sm text-gray-200 font-extralight">{errors.phoneNumber?.message}</p>
                    </div>
                    <div className="">
                        <input type="email" {...register("email")} onChange={event => setEmail(event.target.value)} value={email} id="email" className="bg-gray-50 w-[100%] border border-gray-300 text-gray-900 text-sm rounded-sm py-[7px] focus:outline-none" placeholder="Your email address" />
                        <p className="text-sm text-gray-200 font-extralight">{errors.email?.message}</p>
                    </div>
                    <Button className="text-white text-sm font-semibold bg-gray-303442 hover:bg-white hover:text-primary rounded-sm h-[35px] w-[180px] px-3" icon={<FaEnvelope />} value="Subscribe email list"></Button>
                    <ToastContainer />
             
                </form>
            </div>
        </>

    )
}

export default SubscribeForm
