import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
           <h3 className='bg-red-200 p-6 text-2xl font-bold '>This is Users Component</h3> 
        </div>
    );
};

export default Users;