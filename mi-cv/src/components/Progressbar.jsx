export default function ProgressBar({ label, level }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span>{label}</span>
                <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-5">
                <div
                    className="bg-gradient-to-r from-purple-950 to-indigo-600 h-5 rounded-full transition-all duration-700"
                    style={{ width: `${level}%` }}
                >
                    <span className="text-white text-sm align-top ml-2">
                        {level}%
                    </span>
                </div>
            </div>
        </div>
    );
}

{
    /*-------------- ARREGLAR SOSIO --------------------------------------------------------- */
}
