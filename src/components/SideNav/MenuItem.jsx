import { Link } from 'react-router-dom';

export default function MenuItem({ label, link, icon, active }) {


    return (

        <Link to={link} className={`flex items-center flex-row py-3 px-4 mx-2 rounded-lg space-x-3 text-white/80 transition-color duration-300 ease-out ${active ? "bg-sky-700 hover:bg-sky-700/75" : "hover:bg-white/10 "}`}>
            <span className="text-2xl">{icon}</span>
            <span className="">{label}</span>
        </Link>

    )

}