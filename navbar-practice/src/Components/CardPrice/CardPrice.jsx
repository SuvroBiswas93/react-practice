import React from 'react';
import Features from './Features';


const CardPrice = ({pricing}) => {

  const {title,price,features}=pricing
    return (
        <div className='bg-amber-200 border-2 rounded-xl p-4 flex-1 flex flex-col '>
            {/* Card Header */}
            <div>
                <h3 className='text-3xl'>{title}</h3>
                <h3 className='text-2xl text-green-500 '>{price}</h3>
            </div>
            {/* Card Body */}
            <div className='flex-1 flex flex-col'>
                <p className='bg-amber-600 mb-2 text-2xl  rounded-xl p-2 my-2'>Description</p>
               <div className='bg-purple-500 rounded-xl flex-1 '>
                     {
                        features.map((feature,index) =><Features key={index} feature={feature}></Features>)
                     }
               </div>
               <button className="btn w-full bg-black text-white mt-2">Subscribe</button>
            </div>
        </div>
    );
};

export default CardPrice;