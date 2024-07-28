import React, { useState } from 'react';
import StarRating from '../StarRating';

import { useSelector, useDispatch } from 'react-redux';


export default function Rating() {
    const [rating, setRating] = useState(1);
    const [type, setType] = useState('True Rating');
    const [isToggled, setIsToggled] = useState(false);
    const selection = useSelector(state => state.dropdown.selection);

    const handleClick = () => {
        setIsToggled(!isToggled);
        if (!isToggled) {
            setRating(5);
            setType(selection); 
        } else {
            setRating(1);
            setType('True Rating');
        }
    };

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center justify-center bg-white h-[275px] w-[250px] rounded-[20px] drop-shadow-xl px-6 text-black cursor-pointer"
        >
            <p className="text-9xl font-semibold">
                {rating}
            </p>
            <StarRating rating={rating} className="p-2" />
            <span className='p-3 text-xl'>
                {type}
            </span>
        </div>
    );
}