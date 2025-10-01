import { Link, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import LinkItems from './LinkItems';

// navData.js
export const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const[open,setOpen]=useState(false)
  const links =  navItems.map((item,id)=><LinkItems key={id} item={item}></LinkItems>)
    return (
        <div className=' '>
            <nav className='flex justify-between items-center p-3 bg-emerald-300 '>
            
            <span className='flex items-center  gap-2' onClick={()=> setOpen(!open)}>
              {open? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>  }
              

              <ul className={`md:hidden absolute bg-amber-300 p-2 rounded space-y-2 duration-1000
                ${open ? 'top-15' : '-top-80'} `}>

                {links}

              </ul>
              
               <h3 className='bg-green-500 text-white  rounded-lg h-[40px] flex justify-center items-center px-4 py-2 
               cursor-pointer font-semibold text-md shadow-md hover:bg-green-600 transition '>Navbar</h3>
            </span>
            
           
            <ul className='md:flex hidden justify-center items-center gap-10 p-4 '>
               {
                 links
               }
            </ul>

            {/* <ul className='flex justify-center items-center gap-10 p-4 '>
                {
                    navItems.map(item => <li><a href={item.path}>{item.name}</a></li> )
                }
            </ul> */}

            {/* <ul className='flex justify-center items-center gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                
            </ul> */}
            <button className='btn bg-blue-300 text-white'>Button</button>
        </nav>
        </div>
    );
};

export default Navbar;