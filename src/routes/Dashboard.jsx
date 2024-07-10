import Sidebar from "../components/Sidebar"
import Dropdown from "../components/Dropdown"
import EagleEye from '../components/EagleEye';
import BestReview from '../components/BestReview';
import FunnyReview from '../components/FunnyReview';
import MostRated from '../components/MostRated';
import StarVNumber from '../components/StarVNumber';
export default function Dashboard() {

    return (
        <>
            <div className="flex bg-root-2">


                <Sidebar />
                <div className="ml-[50px] mt-[50px]">
                    <Dropdown />

                    <EagleEye />
                    <MostRated />

                </div>
                <div className="ml-[58px] mt-[58px]">
                    <StarVNumber />
                    <div className="flex flex-row mt-[45px] gap-[32px]">
                        <BestReview />
                        <FunnyReview />
                    </div>

                </div>

            </div>

        </>
    )
}