import React, { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const links = [
    {
      id: 'home',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About',
    },
    {
      id: 'skills',
      label: 'Skills',
    },
    {
      id: 'projects',
      label: 'Projects',
    },
    {
      id: 'certifications',
      label: 'Certifications',
    },
    {
      id: 'experience',
      label: 'Experience',
    },
    {
      id: 'extra-curricular',
      label: 'Extra-Curricular',
    },
   
  ];

  return (
    <div className='bg-black text-white flex fixed justify-between py-4 items-center px-2 w-full '>
      <div>
        <h1 className='font-greatvibes mx-2 text-4xl'>Kshitiz.</h1>
      </div>
      <div>
        <ul className='md:text-lg capitalize px-4 gap-8 hidden md:flex'>
          {links.map(({ id, label }) => (
            <li
              key={id}
              className='focus:text-yellow-400 focus:scale:105 capitalize hover:scale-110 duration-200 hover:text-yellow-400 hover:cursor-pointer'
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className='hover:text-yellow-400 hover:cursor-pointer text-4xl md:hidden'>
        {nav ? <FiAlignRight /> : <RxCross2 className='z-50 absolute right-2 top-3' />}
      </div>
      {!nav && (
        <ul className='w-full h-screen top-0 right-0 z-40 flex gap-8 flex-col items-center justify-center absolute bg-gradient-to-br from-black via-slate-700 to-gray-500'>
          {links.map(({ id, label }) => (
            <li
              key={id}
              className='capitalize text-3xl hover:scale-105 hover:cursor-pointer hover:text-yellow-400'
              onClick={() => setNav(true)} // Close the menu after clicking a link
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
