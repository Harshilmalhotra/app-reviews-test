import React, { useEffect } from 'react';
import SideNav from "../components/SideNav/SideNav"
import Dropdown from "../components/Dropdown"
import ReviewsVSMonth from '../components/Vibecheck/ReviewsVSMonth';
import SaMoM from '../components/Vibecheck/saMoM';
import Topic from '../components/Vibecheck/TopicVsSentiments';


export default function Vibe() {

    useEffect(() => {
        document.title = 'Vibe | App Reviews';
    }, []);

    return (
        <>
            <div className="flex bg-slate-700">


                <SideNav active="Vibe"/>
                <div className="ml-[20px] mt-[5px]">
                    <Dropdown />
                        <div className="flex flex-col">
                                <div className="flex flex-row mt-[5px] gap-[10px] ">
                                    <ReviewsVSMonth />
                                    <Topic/>
                                </div>
                                <SaMoM />
                        </div>
                   

                </div>
                

               

            </div>

        </>
    )
}