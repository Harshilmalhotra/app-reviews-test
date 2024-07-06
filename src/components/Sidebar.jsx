import Logo from '../assets/logo.png';
import Vibe from '../assets/vibe_check.png';
import Dashboard from '../assets/dashboard.png';
import Founder from '../assets/founder_desk.png';
import Overview from '../assets/overview.png';
import Profile from '../assets/profile.png';
export default function Sidebar() {
    return (
        <>
        <div className="flex flex-col w-[139px] h-screen bg-slate-600 px-[11px] py-[21px]">
        <img src={Logo} alt="Logo" className="w-[100px] h-[100px] "/>

        <div className="flex flex-col space-y-4  pt-[83px]">
        <a href=" " className='flex items-center flex-col'><img src={Dashboard} alt="Dashboard" className="w-[60px] h-[60px]"/>Dashboard</a>
        <a href=" " className='flex items-center flex-col'><img src={Vibe} alt="Vibe" className="w-[60px] h-[60px]"/>Vibe Check</a>
        <a href=" " className='flex items-center flex-col'><img src={Overview} alt="Overview" className="w-[60px] h-[60px]"/>Overview</a>
        <a href=" " className='flex items-center flex-col'><img src={Founder} alt="Founder" className="w-[60px] h-[60px]"/>Founder's Desk</a>
        
        
        </div>  
        <a href=" "><img src={Profile} alt="Profile" className="w-[75px] h-[75px]"/></a>

        </div>
        </>
    )
    }