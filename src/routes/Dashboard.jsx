import Sidebar from "../components/Sidebar"
import Dropdown from "../components/Dropdown"
import EagleEye from '../components/Dashboard/EagleEye';
import BestReview from '../components/Dashboard/BestReview';
import FunnyReview from '../components/Dashboard/FunnyReview';
import MostRated from '../components/Dashboard/MostRated';
import StarVNumber from '../components/Dashboard/StarVNumber';
export default function Dashboard() {

    return (
        <>
             <div className="flex bg-root-2">   {/* left right division */}
                <Sidebar />

                    <div className="flex flex-col m-4 ml-8">
                    <Dropdown />

                    <div className=" flex flex-row gap-8 h-[300px] mt-4">   {/* dropdown division */}
                        
                        <EagleEye />
                        <StarVNumber />
                        
                    </div>                                                   
                                <div className="flex flex-row  gap-8 mt-5 h-[280px]">  
                                    <MostRated /> {/* best and funny review division */}
                                    <BestReview />
                                    <FunnyReview />
                                </div>
                      
                        </div>
            </div>

        </>
    )
}