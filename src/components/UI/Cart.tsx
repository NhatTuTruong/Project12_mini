import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    return (
        <>
            <button type="button" className="px-4 text-lg font-medium text-center inline-flex items-center text-primary bg-white rounded-md hover:bg-blue-800  focus:outline-none focus:ring-blue-300 ">
               <FaShoppingCart></FaShoppingCart>
               <span className="pl-3">0</span>
            </button>
        </>
    )
}

export default Cart