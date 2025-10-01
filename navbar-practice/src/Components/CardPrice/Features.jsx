import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Features = ({feature}) => {
    console.log(feature)
    return (
        <div className=''>
            
           
             <h3 className='text-xl p-2 flex item-center gap-2  '><CircleCheckBig />{feature}</h3>
           
        </div>
    );
};

export default Features;
