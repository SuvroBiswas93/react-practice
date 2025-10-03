import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log('Users  data load',users)
    return (
        <div>
            <h3 className='bg-red-400 p-6 text-2xl font-bold'>This is Users2 Component</h3>
        </div>
    );
};

export default Users2;