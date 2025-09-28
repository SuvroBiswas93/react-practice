import React from 'react';

const LinkItems = ({item}) => {
    return (
        <div>
            <li>
                <a href={item.path}>{item.name}</a>
            </li>
        </div>
    );
};

export default LinkItems;