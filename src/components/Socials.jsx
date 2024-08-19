import React from 'react'
import { FaGithubSquare, FaLinkedin, FaInstagram   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentAttach } from "react-icons/io5";
const Socials = () => {
  const social = [
     {
      id:'a',
      href:'/',
      style: "rounded-tr-md ",
      child:(<>
         LinkedIn
        <FaLinkedin className='text-4xl'/></>
      )
     },
     {
      id:'b',
      href:'/',
      child:(<>
         GitHub
        <FaGithubSquare className='text-4xl'/></>
      )
     },
     {
      id:'c',
      href:'/',
      child:(<>
         Instagram
        <FaInstagram className='text-4xl'/></>
      )
     },
     {
      id:'d',
      href:'mailto:/',
      child:(<>
         Gmail
        <SiGmail className='text-4xl'/></>
      )
     },
     {
      id:'e',
      href:'/',
      child:(<>
         Resume
        <IoDocumentAttach className='text-4xl'/></>
      ),
      style:"rounded-br-md"
     },
  ]
  return (
    <div className='fixed top-4'>
      <ul className='absolute top-52 left-0 '>
        {social.map(({id,href,child,style})=>{
          return <li key={id} className={`${style} ml-[-115px] py-1 h-10 w-40 hover:ml-[5px] bg-gray-300  duration-300 `} ><a className={` flex  justify-between px-1 gap-3 items-center flex-end`} href={href} rel="noreferrer" target='_blank'>{child}</a></li>
        })}
      </ul>
    </div>
  )
}

export default Socials
