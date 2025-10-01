import React, { use } from 'react';
import CardPrice from '../CardPrice/CardPrice';


const PricingOptions = ({fetchPromise}) => {
    const priceData = use(fetchPromise)
    console.log(priceData)
    return (
        <div>
            <h2>Get Our Membership</h2>
            <div>
                {
                    priceData.map((price,id) =><CardPrice key={id} price={price}></CardPrice>) 
                }
            </div>
        </div>
    );
};

export default PricingOptions;