export default function Progressbar({ value }) {
    return (
        <>
            <div className="flex justify-between text-xs mb-1 ">
                <span>Progress</span>
                <span>{value}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 gray-900 rounded-full transition-all" style={{width: `${value}%`}}/>

            </div>
        </>
    )
}