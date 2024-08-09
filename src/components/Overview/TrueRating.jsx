import React, { useState } from 'react';
import StarRating from '../StarRating';

import { useSelector, useDispatch } from 'react-redux';
import DashboardContainer from '../DashboardContainer';


export default function TrueRating() {
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
        <DashboardContainer title="True Rating">
            <div
                onClick={handleClick}
                className="flex flex-col h-full items-center justify-center cursor-pointer"
            >
                <p className="text-9xl font-semibold">
                    {rating}
                </p>
                <StarRating rating={rating} className="mt-2" />
                <span className='mt-3 text-xl'>
                    {type}
                </span>
            </div>
        </DashboardContainer>
    );
}