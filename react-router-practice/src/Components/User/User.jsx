import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone} = user
    return (
        <div className='border-2 border-amber-300 rounded-xl gap-2 m-4 p-4'>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
            <div className='animate-bounce'>
                <Link to={`/users/${id}`}className='text-blue-500 hover:text-blue-700 underline '><span className='animate-bounce'>Show Details</span></Link>
            </div>
        </div>
    );
};

export default User;