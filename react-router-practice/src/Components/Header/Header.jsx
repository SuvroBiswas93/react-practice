import React from 'react';
import { Link, NavLink } from 'react-router';


const Header = () => {
    return (
        <div>
            <h3 className='text-4xl mb-10'>This is header component</h3>
            <div className='flex gap-2 justify-center items-center mb-8'>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/laptops">Laptops</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/mobiles">Mobiles</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/users">Users</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/users2">Users2</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-400 px-4 py-2 rounded-xl' : ''} to="/contact">Contact</NavLink>
                
            </div>
        </div>
    );
};

export default Header;