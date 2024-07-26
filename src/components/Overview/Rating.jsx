import React, { useState } from 'react';
import StarRating from '../StarRating';

export default function Rating() {

    const [rating, setRating] = useState(1);
    const [type, setType] = useState('Playstore');
    return(
        <>
         <div className="flex flex-col items-center justify-center bg-white h-297 w-[400px] rounded-[20px] drop-shadow-xl px-6 text-black">
 
            <p className="text-9xl font-semibold ">
                {rating}
                </p>
                <StarRating rating={rating} className="p-2"/>
                
                <span className='p-3 text-xl'>
                On {type}
                    </span>
            
        </div>

      
        </>
    )
}