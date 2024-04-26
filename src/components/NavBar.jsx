import React, { useState, useEffect } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { BsPlusLg } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import logo from '../assets/logo.png';



const NavBar = () => {

    const [nav, setnav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home', 
            icon: <AiFillHome />,
        },
        {
            id: 2,
            link: 'About Me',
            icon: <BsStars />,
        },
        {
            id: 3,
            link: 'My Projects',
            icon: <BsPlusLg />,
        },
        {
            id: 4,
            link: 'Experience',
            icon: <BsSearch />,
        },
    ];

    useEffect(() => {
        const closeNavOnFullScreen = () => {
            if (window.innerWidth > 768) {
                setnav(false);
            }
        };

        window.addEventListener('resize', closeNavOnFullScreen);

        return () => {
            window.removeEventListener('resize', closeNavOnFullScreen);
        };
    }, []);
    
    
    return (
        <div className='flex justify-between items-center w-full h-14 mt-4 mx-auto text-white bg-black bg-opacity-50 fixed rounded-full'>
            <div>
                <img src={logo} alt="Logo" className='h-14 ml-10' />
            </div>

            <ul className='hidden md:flex'>

                {links.map(({id, link, icon}) => (
                    <li 
                        key={id} 
                        className='flex items-center px-4 cursor-pointer capitalize 
                        hover:scale-105 duration-200 mx-10'>
                        {icon && <div className="mr-2">{icon}</div>}
                        {link}
                    </li>
                ))}
            </ul>

            <div onClick={() => setnav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                <div className='p-4'>
                {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white bg-opacity-50'>
                {links.map(({id, link}) => (
                        <li 
                            key={id} 
                            className='font-serif text-xl mb-5 cursor-pointer capitalize 
                            hover:scale-105 duration-200'>
                            
                            {link}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default NavBar;