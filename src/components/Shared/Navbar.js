import React from 'react';
import logo from '../../Assets/logo ostad.png';
const Navbar = () => {
    return (
        <div className=''>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabindex="0">
                                <a>
                                    সেট ইয়োর গোল
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>আপকামিং লাইভ ব্যাচ</a></li>
                            <li><a>English</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl lg:mx-10"><img src={logo} alt="" /></a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu  menu-horizontal px-1">
                            <li tabindex="0">
                                <a>
                                    সেট ইয়োর গোল
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>আপকামিং লাইভ ব্যাচ</a></li>
                            <li><a>English</a></li>
                        </ul>
                    </div>
                    <a class="btn btn btn-outline btn-secondary lg:mx-10">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;