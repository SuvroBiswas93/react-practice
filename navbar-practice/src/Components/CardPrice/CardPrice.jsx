import React from 'react';

const CardPrice = ({price}) => {

    return (
        <div className='bg-amber-600'>
            <h3>{price.title}</h3>
            <h3>{price.price}</h3>
        </div>
    );
};

export default CardPrice;