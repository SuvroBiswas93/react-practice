import React from 'react';

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
    return (
        <nav className='shadow-lg'>
            <ul className='flex justify-center items-center gap-10 p-4 '>
                {
                    navItems.map(item => <li><a href={item.path}>{item.name}</a></li> )
                }
            </ul>

            {/* <ul className='flex justify-center items-center gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                
            </ul> */}
        </nav>
    );
};

export default Navbar;