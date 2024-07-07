import Sidebar from "../components/Sidebar"
import Dropdown from "../components/Dropdown"
import Saata from '../components/saAtA';
import SaMoM from '../components/saMoM';
import Topic from '../components/TopicVsSentiments';
export default function Dashboard() {

    return (
        <>
            <div className="flex bg-root-2">


                <Sidebar />
                <div className="ml-[58px] mt-[58px]">
                    <Dropdown />
                        <div className="flex flex-col">
                                <div className="flex flex-row mt-[51px] gap-[27px] ">
                                    <Saata />
                                    <Topic/>
                                </div>
                                <SaMoM />
                        </div>
                   

                </div>
                

               

            </div>

        </>
    )
}