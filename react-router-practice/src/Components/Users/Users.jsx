import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
           <h3 className='bg-red-200 p-6 text-2xl font-bold '>This is Users Component</h3> 
           {
            users.map((user,id) => <User key={id} user={user}></User> )
           }
        </div>
    );
};

export default Users;