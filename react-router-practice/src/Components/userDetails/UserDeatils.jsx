import React from 'react';
import { useLoaderData } from 'react-router';

const UserDeatils = () => {
    const {name,email,website,phone} = useLoaderData()
    
    return (
        <div>
            <h2 className='text-2xl font-bold bg-purple-600 p-6 rounded-xl'>This is User details component</h2>
            <div className='border-2 border-amber-300 p-2 m-2 rounded-xl'>
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                    <h2>{website}</h2>
                    <h2>{phone}</h2>
            </div>
        </div>
    );
};

export default UserDeatils;