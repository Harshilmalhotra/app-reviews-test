import React, { useEffect } from 'react';
import SideNav from "../components/SideNav/SideNav"
import Dropdown from "../components/Dropdown"
import ReviewsVSMonth from '../components/Vibecheck/ReviewsVSMonth';
import TopicVsSentiments from '../components/Vibecheck/TopicVsSentiments';
import SaMoM from '../components/Vibecheck/saMoM';


export default function Vibe() {

    useEffect(() => {
        document.title = 'Vibe | App Reviews';
    }, []);

    return (
        <>
            <div className="flex bg-slate-700">

                <SideNav active="Vibe" />

                <div className="flex flex-col flex-grow">
                    <Dropdown />

                    <div className="grid p-8 grid-rows-5 grid-cols-6 grid-flow-row gap-8 h-full">
                        <div className="col-span-3 row-span-3">
                            <ReviewsVSMonth />
                        </div>
                        <div className="col-span-3 row-span-3">
                            <TopicVsSentiments />
                        </div>
                        <div className="col-span-6 row-span-2">
                            <SaMoM />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}