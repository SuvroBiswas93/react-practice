import React, { use } from 'react';
import CardPrice from '../CardPrice/CardPrice';
import DaisyPriceCard from '../DaisyPriceCard/DaisyPriceCard';


const PricingOptions = ({fetchPromise}) => {
    const priceData = use(fetchPromise)
    console.log(priceData)
    return (
        <div>
            <h2 className='my-6 text-center text-3xl font-extrabold'>Get Our Membership</h2>
            <div className='grid grid-cols-1 mx-2 md:grid-cols-3 gap-6 '>
                {/* {
                    priceData.map((pricing,id) =><CardPrice key={id} pricing={pricing}></CardPrice>) 
                } */}
                {
                    priceData.map((pricing,id) =><DaisyPriceCard key={id} pricing={pricing}></DaisyPriceCard>) 
                }
            </div>
        </div>
    );
};

export default PricingOptions;