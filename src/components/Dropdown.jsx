import { IoIosArrowDropdownCircle } from "react-icons/io";
export default function Dropdown() {
    return (
        <>
            <div className="dropdown dropdown-hover text-white ">
                <div tabIndex={0} role="button" className="btn m-1 bg-root-1 w-[375px] h-[37.98] rounded-[50px] drop-shadow-xl flex justify-between ">Hover <IoIosArrowDropdownCircle/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Play Store</a></li>
                    <li><a>App Store</a></li>
                    <li><a>Combined</a></li>
                    
                </ul>
            </div>
        </>


    )
}