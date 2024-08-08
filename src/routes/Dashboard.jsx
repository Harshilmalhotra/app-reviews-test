import React, { useEffect } from 'react';

import SideNav from "../components/SideNav/SideNav"
import Dropdown from "../components/Dropdown"
import EagleEye from '../components/Dashboard/EagleEye';
import BestReview from '../components/Dashboard/BestReview';
import FunnyReview from '../components/Dashboard/FunnyReview';
import MostRated from '../components/Dashboard/MostRated';
import StarVNumber from '../components/Dashboard/StarVNumber';


export default function Dashboard() {

    useEffect(() => {
        document.title = 'Dashboard | App Reviews';
    }, []);

    return (
        <>
            <div className="flex bg-slate-700">   {/* left right division */}
                <SideNav active="Dashboard" />

                <div className="flex flex-col flex-grow">
                    <Dropdown />

                    <div className="grid p-8 grid-rows-5 grid-cols-6 grid-flow-row gap-8 h-full">
                        <div className="col-span-2 row-span-3">
                            <EagleEye />
                        </div>
                        <div className="col-span-4 row-span-3">
                            <StarVNumber />
                        </div>
                        <div className="col-span-2 row-span-2">
                            <MostRated /> {/* best and funny review division */}
                        </div>
                        <div className="col-span-2 row-span-2">
                            <BestReview />
                        </div>
                        <div className="col-span-2 row-span-2">
                            <FunnyReview />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}