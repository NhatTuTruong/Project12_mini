
import { Link } from 'react-router-dom';

import menu from '../../data/menu/menu.ts';
import Cart from '../UI/Cart.tsx';
const Header = () => {
    return (
        <>
            <nav className="bg-primary  w-full z-20 top-0 left-0 shadow">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link className="flex items-center justify-start" to='/'><h1 className='text-[40px] text-white font-semibold'>Electrician</h1></Link>
                    <div className="flex md:order-2">

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4  border  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {
                                menu.map((item: any) => (
                                    <li key={item.name}>
                                        <Link to={item.url} className="block py-2 pl-3  font-semibold  rounded md:bg-transparent md:text-white" aria-current="page">{item.name}</Link >
                                    </li>
                                ))
                            }
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;