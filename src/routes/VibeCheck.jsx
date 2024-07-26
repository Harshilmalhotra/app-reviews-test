import Sidebar from "../components/Sidebar"
import Dropdown from "../components/Dropdown"
import ReviewsVSMonth from '../components/Vibecheck/ReviewsVSMonth';
import SaMoM from '../components/Vibecheck/saMoM';
import Topic from '../components/Vibecheck/TopicVsSentiments';
export default function Dashboard() {

    return (
        <>
            <div className="flex bg-root-2">


                <Sidebar />
                <div className="ml-[58px] mt-[58px]">
                    <Dropdown />
                        <div className="flex flex-col">
                                <div className="flex flex-row mt-[51px] gap-[27px] ">
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