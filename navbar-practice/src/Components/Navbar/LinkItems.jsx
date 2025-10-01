import React from 'react';

const LinkItems = ({item}) => {
    return (
        <div>
            <li className='hover:bg-green-200 focus:bg-green-300 active:bg-green-300 rounded-md px-2'>
                <a href={item.path}>{item.name}</a>
            </li>
        </div>
    );
};

export default LinkItems;