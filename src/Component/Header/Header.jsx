import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let navigate = useNavigate()
    let [nav, setNav] = useState(false)

    return (
        <nav className='bg-slate-800 py-4 text-slate-50'>
            <div className="max-w-7xl mx-10 xl:mx-auto flex justify-between">
                <h2 className='font-bold text-3xl flex items-center cursor-pointer'>Talent Hub</h2>
                <div className='flex items-center relative'>
                    <span onClick={() => setNav(!nav)} className='md:hidden text-2xl bg-emerald-500 py-2 px-3 rounded-lg'>
                        {
                            nav ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        }
                    </span>
                    <ul className={`flex flex-col md:flex-row absolute md:static top-full ${nav ? `-left-32` : `left-36`} duration-500 justify-center text-xl font-semibold gap-4 bg-slate-800 w-64 md:w-auto rounded-lg md:rounded-none p-4 md:p-0`}>
                        <li><NavLink className={({ isActive }) => `p-2 block ${isActive ? 'border-b-2 border-b-red-500 duration-500 transition' : 'border-b-transparent'}`} to='/home'>Home</ NavLink></li>
                        <li><NavLink className={({ isActive }) => `p-2 block ${isActive ? 'border-b-2 border-b-red-500 duration-500 transition' : 'border-b-transparent'}`} to='/statistics'>Statistics</NavLink ></li>
                        <li><NavLink className={({ isActive }) => `p-2 block ${isActive ? 'border-b-2 border-b-red-500 duration-500 transition' : 'border-b-transparent'}`} to='/applied-jobs'>Applied Job</NavLink ></li>
                        <li><NavLink className={({ isActive }) => `p-2 block ${isActive ? 'border-b-2 border-b-red-500 duration-500 transition' : 'border-b-transparent'}`} to='/blogs'>Blogs</NavLink ></li>
                    </ul>
                </div>
                <button onClick={() => navigate('/applied-jobs')} className='hidden md:block font-bold text-xl rounded-lg py-3 px-5 bg-emerald-500'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;