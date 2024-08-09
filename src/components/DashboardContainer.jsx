export default function DashboardContainer({ title, children, rightBtn }) {
    return (
        <div className="flex flex-col h-full rounded-xl drop-shadow-lg bg-slate-600 text-white/80 overflow-hidden">
            {title && (
                <div className={`${rightBtn ? "justify-between" : ""} flex flex-grow-0 flex-shrink-0 p-2 bg-slate-800 p-4`}>
                    <h1 className="text-lg font-medium">{title}</h1>
                    {rightBtn}
                </div>
            )}
            <div className="flex flex-col flex-grow p-4">
                <div className="flex flex-col flex-grow h-[100px] overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}