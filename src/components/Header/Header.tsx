
import { Link } from 'react-router-dom';

import menu from '../../data/menu/menu.ts';

const handleLogout = () => {
    // Xóa thông tin đăng nhập từ localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Chuyển hướng người dùng về trang đăng nhập hoặc trang chủ
    window.location.href = '/login'; // Chuyển hướng về trang đăng nhập
};

const user = JSON.parse(localStorage.getItem('user'));
const Header = () => {
    return (
        <>
            <nav className="bg-primary  w-full z-20 top-0 left-0 shadow">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link className="flex items-center justify-start" to='/'><h1 className='text-[40px] text-white font-semibold'>Dự đoán Euro</h1></Link>
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
                                        <Link to={item.url} className="cursor-pointer block py-2 pl-3  font-semibold  rounded md:bg-transparent md:text-white" aria-current="page">{item.name}</Link >
                                    </li>
                                ))
                            }
                            <li>
                                {!user ? <Link to={user ? '/login' : '' } onClick={user ?? handleLogout} className="block py-2 pl-2 pr-2   font-semibold text-center  rounded md:bg-white md:text-primary" aria-current="page">{user ? user.username : 'Login' }</Link > :
                                <a onClick={handleLogout} className="cursor-pointer block py-2 pl-2 pr-2   font-semibold text-center  rounded md:bg-white md:text-primary" aria-current="page">{user.username}</a >
                                }              
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;