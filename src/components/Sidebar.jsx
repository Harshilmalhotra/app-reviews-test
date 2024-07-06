import Logo from '../assets/logo.png';

export default function Sidebar() {
    return (
        <>
        <div className="flex flex-col w-[139px] h-screen bg-slate-600">
        <img src={Logo} alt="Logo" className="w-[100px] h-[100px]"/>    
        </div>
        </>
    )
    }